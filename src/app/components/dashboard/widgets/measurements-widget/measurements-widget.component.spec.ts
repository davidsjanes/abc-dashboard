import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementsWidgetComponent } from './measurements-widget.component';

describe('MeasurementsWidgetComponent', () => {
  let component: MeasurementsWidgetComponent;
  let fixture: ComponentFixture<MeasurementsWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeasurementsWidgetComponent]
    });
    fixture = TestBed.createComponent(MeasurementsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
