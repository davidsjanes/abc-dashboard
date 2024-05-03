import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersWidgetRowComponent } from './orders-widget-row.component';

describe('OrdersWidgetRowComponent', () => {
  let component: OrdersWidgetRowComponent;
  let fixture: ComponentFixture<OrdersWidgetRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersWidgetRowComponent]
    });
    fixture = TestBed.createComponent(OrdersWidgetRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
