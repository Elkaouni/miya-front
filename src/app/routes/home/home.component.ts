import { Component, OnInit } from '@angular/core';

import { CreateReducerService } from '../../../../hooks/useCreateReducer';

import { Prompt } from '../../shared/types/prompt';
import { Conversation } from '../../shared/types/chat';
import { KeyValuePair } from '../../shared/types/data';
import { FolderInterface, FolderType } from '../../shared/types/folder';
import { GPTModelID, GPTModels, fallbackModelID } from '../../shared/types/gptmodel';
import { ErrorService } from '../../shared/services/error-service/errorService';
import { ApiService } from '../../shared/services/use-api-service/useApiService';
import { Chat } from '../../shared/components/chat/chat';
import { Chatbar } from '../../shared/components/chatbar/chatbar.component';
import { Navbar } from '../../shared/components/mobile/navbar/navbar.component';
import { Promptbar } from '../../shared/components/promptbar/promptbar.component';

import { saveFolders } from '../../@util/app/folders';
import { savePrompts } from '../../@util/app/prompts';
import { getSettings } from '../../@util/app/settings';
import { DEFAULT_SYSTEM_PROMPT, DEFAULT_TEMPERATURE } from '../../@util/app/const';
import { cleanConversationHistory,  cleanSelectedConversation,} from '../../@util/app/clean';
import { saveConversation, saveConversations, updateConversation } from '../../@util/app/conversation';

import { HomeInitialState, initialState } from './home.state';

import { HomeContextService, HomeContextState } from './homeContext/home-context.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public state: HomeContextState | undefined;

  constructor(private homeContext: HomeContextService) {}

  ngOnInit(): void {
    this.homeContext.state$.subscribe(state => {
      this.state = state;
    });
  }
}
