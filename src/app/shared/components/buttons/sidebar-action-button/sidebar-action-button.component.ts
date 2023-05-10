import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar-action-button',
  templateUrl: './sidebar-action-button.component.html',
  styleUrls: ['./sidebar-action-button.component.scss']
})
export class SidebarActionButtonComponent {
  @Input()
  children!: string;
  @Output() handleClick = new EventEmitter();
}
