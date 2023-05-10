import { Injectable } from '@angular/core';
import { GPT_API_HOST, GPT_API_TYPE, GPT_API_VERSION, GPT_ORGANIZATION } from '../../@util/app/const';
import { GPTModel, GPTModelID, GPTModels } from '../../shared/types/gptmodel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })

const config = {
  runtime: 'edge',
};


export class ModelsService{
    constructor(private http: HttpClient) {}

    getModels(): Observable<any> {
        let url = `${GPT_API_HOST}/v1/models`;    
    
        const headers = {
            'Content-Type': 'application/json',
            ...((GPT_API_TYPE === 'gpt' && GPT_ORGANIZATION) && {
              'GPT-Organization': GPT_ORGANIZATION,
            }),
          }

        return this.http.get<{data: any[]}>(url, { headers }).pipe(
            map(({data}) => data
              .map((model: any) => {
                const model_name = (GPT_API_TYPE === 'azure') ? model.model : model.id;
                for (const [key, value] of Object.entries(GPTModelID)) {
                  if (value === model_name) {
                    return {
                      id: model.id,
                      name: GPTModels[value].name,
                    };
                  }
                }
              })
              .filter(Boolean)
            )
        );
    }
}

      
      
      
      
      
      
      