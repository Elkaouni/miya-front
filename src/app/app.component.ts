import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'miya-front';
  interClassName = 'app-root-class'

  constructor(translate: TranslateService) {
    // set default language
    translate.setDefaultLang('en');
    // use browser's preferred language (if available)
    let lang : string  = translate.getBrowserLang() || 'en';
    translate.use(lang);
  }
}
