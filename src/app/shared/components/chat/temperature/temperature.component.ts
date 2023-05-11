import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HomeContextService } from 'src/app/routes/home/homeContext/home-context.service';
import { Conversation } from 'src/app/shared/types/chat';
import { Prompt } from 'src/app/shared/types/prompt';


const DEFAULT_TEMPERATURE = 0.5;

@Component({
  selector: 'app-temperature-slider',
  templateUrl: './temperature.component.html',
  styleUrls: [ ]
})

export class TemperatureSliderComponent implements OnInit{
  @Input() label!: string;
  @Output() onChangeTemperature = new EventEmitter<number>();

  temperature = DEFAULT_TEMPERATURE;
  private conversations: Conversation[] = [];

  constructor(private translate: TranslateService,
    private homeContext : HomeContextService ) {
  }

  ngOnInit(){
    this.homeContext.state$.subscribe((context) => {
      this.conversations = context.conversations;
      const lastConversation = this.conversations[this.conversations.length - 1];
      this.temperature = lastConversation?.temperature ?? DEFAULT_TEMPERATURE;
    });
  }

  handleChange(value:number) { 
    this.temperature = value; this.onChangeTemperature.emit(value); 
  } 

}