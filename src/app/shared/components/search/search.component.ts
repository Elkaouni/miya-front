import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent {
  @Input() placeholder: string = '';
  @Input() searchTerm: string = '';
  @Output() onSearch: EventEmitter<string> = new EventEmitter();
  @Output() clearSearch: EventEmitter<void> = new EventEmitter();

  handleSearchChange(value: string) {
    this.onSearch.emit(value);
  }
}