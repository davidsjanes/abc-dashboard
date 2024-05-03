import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesWidgetComponent } from './templates-widget.component';

describe('TemplatesWidgetComponent', () => {
  let component: TemplatesWidgetComponent;
  let fixture: ComponentFixture<TemplatesWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplatesWidgetComponent]
    });
    fixture = TestBed.createComponent(TemplatesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
