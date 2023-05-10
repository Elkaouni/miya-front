
export interface GPTModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

export enum  GPTModelID {
  GPT4ALL = 'gpt4all',
  GPT4FREE = 'gpt4free'
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = GPTModelID.GPT4FREE;

export const GPTModels: Record<GPTModelID, GPTModel> = {
  [GPTModelID.GPT4ALL]: {
    id: GPTModelID.GPT4ALL,
    name: 'gpt4all',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [GPTModelID.GPT4FREE]: {
    id: GPTModelID.GPT4FREE,
    name: 'gpt4free',
    maxLength: 12000,
    tokenLimit: 4000,
  },
};

