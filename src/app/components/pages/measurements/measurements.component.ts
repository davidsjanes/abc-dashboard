import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';
import { MeasurementsFiltersComponent } from './measurements-filters/measurements-filters.component';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.scss']
})
export class MeasurementsComponent {

  constructor(private ModalService: ModalService) {}

  openFilters() {
    this.ModalService.open(MeasurementsFiltersComponent, [], ['filters'], ['panel'], ['small'], ['left'], ['Filter List'], ['Apply Filters']);
  }
  
}
