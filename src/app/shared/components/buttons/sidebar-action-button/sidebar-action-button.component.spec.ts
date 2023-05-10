import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarActionButtonComponent } from './sidebar-action-button.component';

describe('SidebarActionButtonComponent', () => {
  let component: SidebarActionButtonComponent;
  let fixture: ComponentFixture<SidebarActionButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarActionButtonComponent]
    });
    fixture = TestBed.createComponent(SidebarActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
