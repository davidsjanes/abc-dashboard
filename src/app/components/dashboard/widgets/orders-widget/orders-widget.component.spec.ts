import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersWidgetComponent } from './orders-widget.component';

describe('OrdersWidgetComponent', () => {
  let component: OrdersWidgetComponent;
  let fixture: ComponentFixture<OrdersWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersWidgetComponent]
    });
    fixture = TestBed.createComponent(OrdersWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
