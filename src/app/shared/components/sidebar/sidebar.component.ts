import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent<T> {
  @Input() isOpen: boolean = false;
  @Input() addItemButtonTitle: string = '';
  @Input() side: 'left' | 'right' = 'left';
  @Input() items: T[] = [];
  @Input() itemComponent: any;
  @Input() folderComponent: any;
  @Input() footerComponent?: any;
  @Input() searchTerm: string = '';
  @Output() searchTermChange = new EventEmitter<string>();
  @Output() toggleOpen = new EventEmitter<void>();
  @Output() createItem = new EventEmitter<void>();
  @Output() createFolder = new EventEmitter<void>();
  @Output() drop = new EventEmitter<any>();

  allowDrop(event: any) {
    event.preventDefault();
  }

  highlightDrop(event: any) {
    event.target.style.background = '#343541';
  }

  removeHighlight(event: any) {
    event.target.style.background = 'none';
  }

  onSearchTermChange(event: any) {
    this.searchTermChange.emit(event.target.value);
  }
}