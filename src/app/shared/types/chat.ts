import { GPTModel } from './gptmodel';

export interface Message {
  role: Role;
  content: string;
}

export type Role = 'assistant' | 'user';

export interface ChatBody {
  model: GPTModel;
  messages: Message[];
  key: string;
  prompt: string;
  temperature: number;
}

export interface Conversation {
  id: string;
  name: string;
  messages: Message[];
  model: GPTModel;
  prompt: string;
  temperature: number;
  folderId: string | null;
}
