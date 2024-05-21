import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersRowComponent } from './orders-row.component';

describe('OrdersRowComponent', () => {
  let component: OrdersRowComponent;
  let fixture: ComponentFixture<OrdersRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersRowComponent]
    });
    fixture = TestBed.createComponent(OrdersRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
