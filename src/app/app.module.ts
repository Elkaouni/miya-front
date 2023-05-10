import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MicInputComponent } from './routes/home/mic-input/mic-input.component';
import { HomeComponent } from './routes/home/home.component';
import { LoginComponent } from './routes/login/login.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { UnauthorizedComponent } from './routes/unauthorized/unauthorized.component';
import { UsersComponent } from './shared/components/users/users.component';
import { SettingsComponent } from './shared/components/settings/settings.component';
import { SearchComponent } from './shared/components/search/search.component';
import { CloseSidebarButtonComponent, OpenSidebarButtonComponent, IconArrowBarLeftComponent, IconArrowBarRightComponent } from './shared/components/sidebar/components/open-close-button/open-close-button.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { MobileComponent } from './shared/components/mobile/mobile.component';
import { FolderComponent } from './shared/components/folder/folder.component';
import { ChatbarComponent } from './shared/components/chatbar/chatbar.component';
import { SidebarActionButtonComponent } from './shared/components/buttons/sidebar-action-button/sidebar-action-button.component';
import { MarkdownComponent } from './shared/components/markdown/markdown.component';
import { PromptbarComponent } from './shared/components/promptbar/promptbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MicInputComponent,
    HomeComponent,
    LoginComponent,
    SidebarComponent,
    UnauthorizedComponent,
    UsersComponent,
    SettingsComponent,
    SearchComponent,

    CloseSidebarButtonComponent,
    OpenSidebarButtonComponent,
    IconArrowBarLeftComponent,
    IconArrowBarRightComponent,

    SpinnerComponent,
     MobileComponent,
     FolderComponent,
     ChatbarComponent,
     ChatComponent,
     SidebarActionButtonComponent,
     MarkdownComponent,
     PromptbarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
