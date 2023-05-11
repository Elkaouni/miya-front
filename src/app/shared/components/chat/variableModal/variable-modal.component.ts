import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Prompt } from 'src/app/shared/types/prompt';

interface Props {
    prompt: Prompt;
    variables: string[];
    onSubmit: (updatedVariables: string[]) => void;
    onClose: () => void;
  }

@Component({
  selector: 'app-search',
  templateUrl: './variable-modal.component.html',
  styleUrls: [ ]
})

export class VariableModalComponent {
  @Input() prompt?: Prompt;
  @Input() variables?: string[];
  @Output() onSubmit: EventEmitter<string> = new EventEmitter();
  @Output() onClose: EventEmitter<void> = new EventEmitter();

  constructor(private translate: TranslateService){
    this.translate.setDefaultLang('en');
  }

  handleOnSubmit(){
    this.onSubmit.emit();
  }

  handleOnClose(){
    this.onClose.emit();
  }
}