import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GPT_API_HOST, GOOGLE_API_KEY, GOOGLE_CSE_ID, GPT_ORGANIZATION } from '../../@util/app/const';
import { cleanSourceText } from '../../@util/server/google';

import { Message } from '../../shared/types/chat';
import { GoogleBody, GoogleSource } from '../../shared/types/google';

import { Readability } from '@mozilla/readability';
import endent from 'endent';
import { JSDOM } from 'jsdom';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  constructor(private http: HttpClient) { }

  async handler(req: any): Promise<any> {
    try {
      const { messages, key, model, googleAPIKey, googleCSEId } =
        req.body as GoogleBody;

      const userMessage = messages[messages.length - 1];
      const query = encodeURIComponent(userMessage.content.trim());

      const googleRes = await this.http.get(
        `https://customsearch.googleapis.com/customsearch/v1?key=${
          googleAPIKey ? googleAPIKey : GOOGLE_API_KEY
        }&cx=${
          googleCSEId ? googleCSEId : GOOGLE_CSE_ID
        }&q=${query}&num=5`
      ).toPromise();

      const googleData = googleRes as any;

      const sources: GoogleSource[] = googleData.items.map((item: any) => ({
        title: item.title,
        link: item.link,
        displayLink: item.displayLink,
        snippet: item.snippet,
        image: item.pagemap?.cse_image?.[0]?.src,
        text: '',
      }));

      const sourcesWithText: any = await Promise.all(
        sources.map(async (source) => {
          try {
            const timeoutPromise = new Promise((_, reject) =>
              setTimeout(() => reject(new Error('Request timed out')), 5000),
            );

            const res = (await Promise.race([
              this.http.get(source.link),
              timeoutPromise,
            ])) as any;

            // if (res) {
            const html = await res.text();

            const virtualConsole = new JSDOM().virtualConsole;
            virtualConsole.on('error', (error) => {
              if (!error.message.includes('Could not parse CSS stylesheet')) {
                console.error(error);
              }
            });

            const dom = new JSDOM(html, { virtualConsole });
            const doc = dom.window.document;
            const parsed = new Readability(doc).parse();

            if (parsed) {
              let sourceText = cleanSourceText(parsed.textContent);

              return {
                ...source,
                // TODO: switch to tokens
                text: sourceText.slice(0, 2000),
              } as GoogleSource;
            }
            // }

            return null;
          } catch (error) {
            console.error(error);
            return null;
          }
        }),
      );

      const filteredSources: GoogleSource[] = sourcesWithText.filter(Boolean);

      const answerPrompt = endent`
      Provide me with the information I requested. Use the sources to provide an accurate response. Respond in markdown format. Cite the sources you used as a markdown link as you use them at the end of each sentence by number of the source (ex: [[1]](link.com)). Provide an accurate response and then stop. Today's date is ${new Date().toLocaleDateString()}.

      Example Input:
      What's the weather in San Francisco today?

      Example Sources:
      [Weather in San Francisco](https://www.google.com/search?q=weather+san+francisco)

      Example Response:
      It's 70 degrees and sunny in San Francisco today. [[1]](https://www.google.com/search?q=weather+san+francisco)

      Input:
      ${userMessage.content.trim()}

      Sources:
      ${filteredSources.map((source) => {
        return endent`
        ${source.title} (${source.link}):
        ${source.text}
        `;
      })}

      Response:
      `;
      const answerMessage: Message = { role: 'user', content: answerPrompt };

      const answerRes$: Observable<Object> = await this.http.post(`${GPT_API_HOST}/v1/chat/completions`, {
        headers: {
          'Content-Type': 'application/json',
          ...(GPT_ORGANIZATION && {
            'OpenAI-Organization': GPT_ORGANIZATION,
          }),
        },
        body: JSON.stringify({
          model: model.id,
          messages: [
            {
              role: 'system',
              content: `Use the sources to provide an accurate response. Respond in markdown format. Cite the sources you used as [1](link), etc, as you use them. Maximum 4 sentences.`,
            },
            answerMessage,
          ],
          max_tokens: 1000,
          temperature: 1,
          stream: false,
        }),
      });

      answerRes$.subscribe(
        (response : any) => {
          const { choices: choices2 } = response;
          const answer = choices2[0].message.content;
      
          return answer;
        },
        (error : any) => {
          console.error(error);
          return null;
        }
      );

    } catch (error) {
      console.error(error);
      return null;
    }
  }
}