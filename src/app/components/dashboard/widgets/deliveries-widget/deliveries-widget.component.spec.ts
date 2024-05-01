import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveriesWidgetComponent } from './deliveries-widget.component';

describe('DeliveriesWidgetComponent', () => {
  let component: DeliveriesWidgetComponent;
  let fixture: ComponentFixture<DeliveriesWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveriesWidgetComponent]
    });
    fixture = TestBed.createComponent(DeliveriesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
