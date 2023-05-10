import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptbarComponent } from './promptbar.component';

describe('PromptbarComponent', () => {
  let component: PromptbarComponent;
  let fixture: ComponentFixture<PromptbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromptbarComponent]
    });
    fixture = TestBed.createComponent(PromptbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
