import { Component, ViewContainerRef, ViewChildren, QueryList, OnInit, AfterViewInit } from '@angular/core';
import { GridsterConfig } from 'angular-gridster2';
import { Widget } from './widgets/widget.model';
import { DeliveriesWidgetComponent } from '../dashboard/widgets/deliveries-widget/deliveries-widget.component';
import { OrdersWidgetComponent } from '../dashboard/widgets/orders-widget/orders-widget.component';
import { MeasurementsWidgetComponent } from '../dashboard/widgets/measurements-widget/measurements-widget.component';
import { TemplatesWidgetComponent } from '../dashboard/widgets/templates-widget/templates-widget.component';

@Component({
  selector: 'app-dashboard-poc',
  templateUrl: './dashboard-poc.component.html',
  styleUrls: ['./dashboard-poc.component.scss']
})
export class DashboardPocComponent implements OnInit, AfterViewInit {
  options: GridsterConfig;
  widgets: Array<Widget>;

  @ViewChildren('dynamicWidgetContainer', { read: ViewContainerRef }) containers!: QueryList<ViewContainerRef>;

  constructor() {}

  ngOnInit(): void {
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
      mobileBreakpoint: 640,
      fixedRowHeight: 420,
      rowHeightRatio: 1,
      setGridSize: true,
      keepFixedHeightInMobile: true,
      minCols: 2,
      maxCols: 8,
      minRows: 2,
      maxRows: 8,
    };

    this.widgets = [
      { type: 'orders', config: {}, x: 0, y: 0, cols: 5, rows: 1 },
      { type: 'deliveries', config: {}, x: 5, y: 0, cols: 3, rows: 1 },
      { type: 'templates', config: {}, x: 0, y: 1, cols: 4, rows: 1 },
      { type: 'measurements', config: {}, x: 4, y: 2, cols: 4, rows: 1 },
    ];
  }

  ngAfterViewInit(): void {
    this.loadWidgets();
  }

  loadWidgets() {
    this.containers.forEach((container, index) => {
      container.clear();
      const widget = this.widgets[index];
      let component: any;
      if (widget.type === 'orders') {
        component = OrdersWidgetComponent;
      } else if (widget.type === 'deliveries') {
        component = DeliveriesWidgetComponent;
      } else if (widget.type === 'templates') {
        component = TemplatesWidgetComponent;
      } else if (widget.type === 'measurements') {
        component = MeasurementsWidgetComponent;
      }

      const componentRef = container.createComponent(component);
      Object.assign(componentRef.instance, widget.config);
    });
  }

  changedOptions() {
    this.options.api?.optionsChanged();
  }

  removeItem(item: Widget) {
    this.widgets.splice(this.widgets.indexOf(item), 1);
    this.loadWidgets();
  }
}
