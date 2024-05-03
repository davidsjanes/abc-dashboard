import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementsWidgetRowComponent } from './measurements-widget-row.component';

describe('MeasurementsWidgetRowComponent', () => {
  let component: MeasurementsWidgetRowComponent;
  let fixture: ComponentFixture<MeasurementsWidgetRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeasurementsWidgetRowComponent]
    });
    fixture = TestBed.createComponent(MeasurementsWidgetRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
