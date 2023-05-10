export const DEFAULT_SYSTEM_PROMPT =
  process.env.NEXT_PUBLIC_DEFAULT_SYSTEM_PROMPT ||
  "You are ChatGPT, a large language model trained by OpenAI. Follow the user's instructions carefully. Respond using markdown.";

export const DEFAULT_TEMPERATURE = 
  parseFloat(process.env.NEXT_PUBLIC_DEFAULT_TEMPERATURE || "1");

export const GPT_API_HOST =
  process.env.GPT_API_HOST || 'https://you.com';

export const GPT_API_TYPE =
  process.env.GPT_API_TYPE || 'gpt';

export const GPT_API_VERSION =
  process.env.GPT_API_VERSION || 'gpt4free';

export const GPT_ORGANIZATION =
  process.env.GPT_ORGANIZATION || 'openSource';


export const AZURE_DEPLOYMENT_ID =
  process.env.AZURE_DEPLOYMENT_ID || '';

export const GOOGLE_API_KEY =
  process.env.GOOGLE_API_KEY || '';

export const GOOGLE_CSE_ID =
  process.env.GOOGLE_CSE_ID || '';
