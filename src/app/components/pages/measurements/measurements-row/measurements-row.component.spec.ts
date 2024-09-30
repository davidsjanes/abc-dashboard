import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementsRowComponent } from './measurements-row.component';

describe('MeasurementsRowComponent', () => {
  let component: MeasurementsRowComponent;
  let fixture: ComponentFixture<MeasurementsRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeasurementsRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeasurementsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
