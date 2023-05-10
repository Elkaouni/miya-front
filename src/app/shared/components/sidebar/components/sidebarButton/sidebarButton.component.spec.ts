import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarButtonComponent } from './sidebarButton.component';

describe('SidebarButtonComponent', () => {
  let component: SidebarButtonComponent;
  let fixture: ComponentFixture<SidebarButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarButtonComponent]
    });
    fixture = TestBed.createComponent(SidebarButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create SidebarButtonComponent', () => {
    expect(component).toBeTruthy();
  });
});
