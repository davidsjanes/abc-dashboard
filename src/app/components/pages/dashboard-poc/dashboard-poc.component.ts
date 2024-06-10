import { Component } from '@angular/core';
// import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
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
      gridType: 'fit',
      displayGrid: 'onDrag&Resize',
    };

    this.widgets = [
      { x: 0, y: 0, cols: 2, rows: 1 },
      { x: 2, y: 0, cols: 2, rows: 2 },
      { x: 4, y: 0, cols: 1, rows: 1 },
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
