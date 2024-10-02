import { Component } from '@angular/core';
import { SlideoutService } from 'src/app/services/slideout/slideout.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { MeasurementsFiltersComponent } from './measurements-filters/measurements-filters.component';
import { MeasurementsNewReportComponent } from './measurements-new-report/measurements-new-report.component';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.scss']
})
export class MeasurementsComponent {

  constructor(private ModalService: ModalService, private SlideoutService: SlideoutService) {}

  openFilters() {
    this.ModalService.open(MeasurementsFiltersComponent, [], ['filters'], ['panel'], ['small'], ['left'], ['Filter List'], ['Apply Filters']);
  }

  openNewReport() {
    this.SlideoutService.open(MeasurementsNewReportComponent, ['slideout-nav'], ['Order New Report'], ['content'], ['right'], false);
  }
  
}
