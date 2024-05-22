import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';
import { TestContentComponent } from 'src/app/components/shared/test-content/test-content.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})

export class OrdersComponent {

  constructor(private ModalService: ModalService) {}

  openFilters() {
    this.ModalService.open(TestContentComponent);
  }

}
