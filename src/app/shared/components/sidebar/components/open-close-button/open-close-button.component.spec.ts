import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseSidebarButtonComponent, OpenSidebarButtonComponent, IconArrowBarLeftComponent, IconArrowBarRightComponent } from './open-close-button.component';

describe('CloseSidebarButtonComponent', () => {
  let component: CloseSidebarButtonComponent;
  let fixture: ComponentFixture<CloseSidebarButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CloseSidebarButtonComponent]
    });
    fixture = TestBed.createComponent(CloseSidebarButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create CloseSidebarButtonComponent', () => {
    expect(component).toBeTruthy();
  });
});

describe('OpenSidebarButtonComponent', () => {
  let component: OpenSidebarButtonComponent;
  let fixture: ComponentFixture<OpenSidebarButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenSidebarButtonComponent]
    });
    fixture = TestBed.createComponent(OpenSidebarButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create OpenSidebarButtonComponent', () => {
    expect(component).toBeTruthy();
  });
});

describe('IconArrowBarLeftComponent', () => {
  let component: IconArrowBarLeftComponent;
  let fixture: ComponentFixture<IconArrowBarLeftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconArrowBarLeftComponent]
    });
    fixture = TestBed.createComponent(IconArrowBarLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create IconArrowBarLeftComponent', () => {
    expect(component).toBeTruthy();
  });
});

describe('IconArrowBarRightComponent', () => {
  let component: IconArrowBarRightComponent;
  let fixture: ComponentFixture<IconArrowBarRightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconArrowBarRightComponent]
    });
    fixture = TestBed.createComponent(IconArrowBarRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should creatIconArrowBarRightComponente', () => {
    expect(component).toBeTruthy();
  });
});