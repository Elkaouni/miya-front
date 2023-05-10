import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-close-sidebar-button',
  template: `
    <button class="fixed top-5 {{ side === 'right' ? 'right-[270px]' : 'left-[270px]' }} z-50 h-7 w-7 hover:text-gray-400 dark:text-white dark:hover:text-gray-300 sm:top-0.5 sm:{{ side === 'right' ? 'right-[270px]' : 'left-[270px]' }} sm:h-8 sm:w-8 sm:text-neutral-700" (click)="onClick.emit()">
      <i *ngIf="side === 'right'">
        <app-icon-arrow-bar-right></app-icon-arrow-bar-right>
      </i>
      <i *ngIf="side === 'left'">
        <app-icon-arrow-bar-left></app-icon-arrow-bar-left>
      </i>
    </button>
    <div class="absolute top-0 left-0 z-10 h-full w-full bg-black opacity-70 sm:hidden" (click)="onClick.emit()"></div>
  `
})
export class CloseSidebarButtonComponent {
  @Input() side: 'left' | 'right' | undefined;
  @Output() onClick = new EventEmitter<void>();
}

@Component({
  selector: 'app-open-sidebar-button',
  template: `
    <button class="fixed top-2.5 {{ side === 'right' ? 'right-2' : 'left-2' }} z-50 h-7 w-7 text-white hover:text-gray-400 dark:text-white dark:hover:text-gray-300 sm:top-0.5 sm:{{ side === 'right' ? 'right-2' : 'left-2' }} sm:h-8 sm:w-8 sm:text-neutral-700" (click)="onClick.emit()">
      <i *ngIf="side === 'right'">
        <app-icon-arrow-bar-left></app-icon-arrow-bar-left>
      </i>
      <i *ngIf="side === 'left'">
        <app-icon-arrow-bar-right></app-icon-arrow-bar-right>
      </i>
    </button>
  `
})
export class OpenSidebarButtonComponent {
  @Input() side: 'left' | 'right' | undefined;
  @Output() onClick = new EventEmitter<void>();
}

@Component({
  selector: 'app-icon-arrow-bar-left',
  template: `
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 18l-6-6 6-6"/>
    </svg>
  `
})
export class IconArrowBarLeftComponent {}

@Component({
  selector: 'app-icon-arrow-bar-right',
  template: `
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 18l6-6-6-6"/>
    </svg>
  `
})
export class IconArrowBarRightComponent {}