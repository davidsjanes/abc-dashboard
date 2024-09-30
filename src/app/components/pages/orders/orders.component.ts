import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';
import { OrdersFiltersComponent } from './orders-filters/orders-filters.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})

export class OrdersComponent {

  constructor(private ModalService: ModalService) {}

  openFilters() {
    this.ModalService.open(OrdersFiltersComponent, [], ['filters'], ['panel'], ['small'], ['left'], ['Filter List'], ['Apply Filters']);
  }

}
