import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Conversation } from '../../../shared/types/chat';
import { FolderType } from '../../../shared/types/folder';


@Injectable({
  providedIn: 'root'
})
export class HomeContextService {
  private _state = new BehaviorSubject<HomeContextState>({
    conversations: [],
    selectedConversation: null,
  });

  public readonly state$ = this._state.asObservable();

  public handleNewConversation(): void {
    // Implement the handleNewConversation function here.
  }

  public handleCreateFolder(name: string, type: FolderType): void {
    // Implement the handleCreateFolder function here.
  }

  public handleDeleteFolder(folderId: string): void {
    // Implement the handleDeleteFolder function here.
  }

  public handleUpdateFolder(folderId: string, name: string): void {
    // Implement the handleUpdateFolder function here.
  }

  public handleSelectConversation(conversation: Conversation): void {
    // Implement the handleSelectConversation function here.
  }

  public handleUpdateConversation(conversation: Conversation, data: any): void {
    // Implement the handleUpdateConversation function here.
  }
}

export interface HomeContextState {
  conversations: Conversation[];
  selectedConversation: Conversation | null;
}
