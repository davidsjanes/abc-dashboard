import { Component } from '@angular/core';
import { ModalService } from '../../../../../services/modal/modal.service';
import { TestContentComponent } from 'src/app/components/shared/test-content/test-content.component';

@Component({
  selector: 'app-orders-widget',
  templateUrl: './orders-widget.component.html',
  styleUrls: ['./orders-widget.component.scss']
})
export class OrdersWidgetComponent {

  constructor(private ModalService: ModalService) {}

  openTestModal() {
    this.ModalService.open(TestContentComponent);
  }
}
