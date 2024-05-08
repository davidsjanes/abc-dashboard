import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveriesWidgetItemComponent } from './deliveries-widget-item.component';

describe('DeliveriesWidgetItemComponent', () => {
  let component: DeliveriesWidgetItemComponent;
  let fixture: ComponentFixture<DeliveriesWidgetItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveriesWidgetItemComponent]
    });
    fixture = TestBed.createComponent(DeliveriesWidgetItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
