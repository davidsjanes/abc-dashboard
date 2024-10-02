import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementsNewPageComponent } from './measurements-new-page.component';

describe('MeasurementsNewPageComponent', () => {
  let component: MeasurementsNewPageComponent;
  let fixture: ComponentFixture<MeasurementsNewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeasurementsNewPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeasurementsNewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
