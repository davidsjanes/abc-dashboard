import { Component } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';

@Component({
  selector: 'app-dashboard-poc',
  templateUrl: './dashboard-poc.component.html',
  styleUrls: ['./dashboard-poc.component.scss']
})

export class DashboardPocComponent {
  options: GridsterConfig;
  widgets: Array<GridsterItem>;

  constructor() {
    this.options = {
      draggable: {
        enabled: true,
      },
      resizable: {
        enabled: true,
      },
      pushItems: true,
      margin: 20,
      outerMargin: false,
      gridType: 'verticalFixed',
      displayGrid: 'none',
      compactType: 'compactUp',
      enableBoundaryControl: true,
      mobileBreakpoint: 768,
      fixedRowHeight: 400,
      rowHeightRatio: 1,
      setGridSize: true,
      minCols: 2,
      maxCols: 3,
      minRows: 1,
      maxRows: 4,
    };

    this.widgets = [
      { x: 2, y: 0, cols: 1, rows: 2 },
      { x: 0, y: 0, cols: 2, rows: 1 },
      { x: 0, y: 1, cols: 2, rows: 1 },
    ];
  }

  changedOptions() {
    this.options.api?.optionsChanged();
  }

  removeItem(item: GridsterItem) {
    this.widgets.splice(this.widgets.indexOf(item), 1);
  }

  addItem() {
    this.widgets.push({ x: 0, y: 0, cols: 1, rows: 1 });
  }
}
