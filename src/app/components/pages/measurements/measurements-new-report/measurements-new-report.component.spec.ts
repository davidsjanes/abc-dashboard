import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementsNewReportComponent } from './measurements-new-report.component';

describe('MeasurementsNewReportComponent', () => {
  let component: MeasurementsNewReportComponent;
  let fixture: ComponentFixture<MeasurementsNewReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeasurementsNewReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeasurementsNewReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
