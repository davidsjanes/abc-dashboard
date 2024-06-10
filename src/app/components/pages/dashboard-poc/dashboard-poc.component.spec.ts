import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPocComponent } from './dashboard-poc.component';

describe('DashboardPocComponent', () => {
  let component: DashboardPocComponent;
  let fixture: ComponentFixture<DashboardPocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardPocComponent]
    });
    fixture = TestBed.createComponent(DashboardPocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
