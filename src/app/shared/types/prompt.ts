import { GPTModel } from './gptmodel';

export interface Prompt {
  id: string;
  name: string;
  description: string;
  content: string;
  model: GPTModel;
  folderId: string | null;
}
