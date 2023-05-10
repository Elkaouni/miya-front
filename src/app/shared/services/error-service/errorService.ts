import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ErrorMessage } from '../../types/error';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  constructor(private translate: TranslateService) {}

  getModelsError(error: any) {
    return !error
      ? null
      : ({
          title: this.translate.instant('Error fetching models.'),
          code: error.status || 'unknown',
          messageLines: error.statusText
            ? [error.statusText]
            : [
                // this.translate.instant('Make sure your OpenAI API key is set in the bottom left of the sidebar.'),
                // this.translate.instant('If you completed this step, OpenAI may be experiencing issues.'),
              ],
        } as ErrorMessage);
  }
}