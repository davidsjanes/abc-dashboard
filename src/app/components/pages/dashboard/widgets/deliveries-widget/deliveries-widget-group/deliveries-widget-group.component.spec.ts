import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveriesWidgetGroupComponent } from './deliveries-widget-group.component';

describe('DeliveriesWidgetGroupComponent', () => {
  let component: DeliveriesWidgetGroupComponent;
  let fixture: ComponentFixture<DeliveriesWidgetGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveriesWidgetGroupComponent]
    });
    fixture = TestBed.createComponent(DeliveriesWidgetGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
