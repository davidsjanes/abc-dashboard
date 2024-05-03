import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesWidgetRowComponent } from './templates-widget-row.component';

describe('TemplatesWidgetRowComponent', () => {
  let component: TemplatesWidgetRowComponent;
  let fixture: ComponentFixture<TemplatesWidgetRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplatesWidgetRowComponent]
    });
    fixture = TestBed.createComponent(TemplatesWidgetRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
