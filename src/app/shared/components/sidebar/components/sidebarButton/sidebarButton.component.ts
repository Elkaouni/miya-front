import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar-button',
  template: `
  <button 
    className="flex w-full cursor-pointer select-none items-center gap-3 rounded-md py-3 px-3 text-[14px] leading-3 text-white transition-colors duration-200 hover:bg-gray-500/10"
    onClick={onClick}
  >
      <div>{icon}</div>
      <span>{text}</span>
  </button>
  `
})

export class SidebarButtonComponent {
  @Input() text!: string;
  @Input() icon!: any;
  @Output() onClick = new EventEmitter<void>();
}
