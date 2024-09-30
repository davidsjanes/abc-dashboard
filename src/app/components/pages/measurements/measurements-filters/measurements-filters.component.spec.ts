import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementsFiltersComponent } from './measurements-filters.component';

describe('MeasurementsFiltersComponent', () => {
  let component: MeasurementsFiltersComponent;
  let fixture: ComponentFixture<MeasurementsFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeasurementsFiltersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeasurementsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
