import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { ModalService } from './services/modal/modal.service';
import { GridsterModule } from 'angular-gridster2';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/navigation/sidebar/sidebar.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { TopNavComponent } from './components/navigation/top-nav/top-nav.component';
import { FooterComponent } from './components/navigation/footer/footer.component';
import { SiteNavComponent } from './components/navigation/site-nav/site-nav.component';
import { OrdersWidgetComponent } from './components/pages/dashboard/widgets/orders-widget/orders-widget.component';
import { DeliveriesWidgetComponent } from './components/pages/dashboard/widgets/deliveries-widget/deliveries-widget.component';
import { TemplatesWidgetComponent } from './components/pages/dashboard/widgets/templates-widget/templates-widget.component';
import { MeasurementsWidgetComponent } from './components/pages/dashboard/widgets/measurements-widget/measurements-widget.component';
import { OrdersComponent } from './components/pages/orders/orders.component';
import { AccountComponent } from './components/pages/account/account.component';
import { MeasurementsComponent } from './components/pages/measurements/measurements.component';
import { QuotesComponent } from './components/pages/quotes/quotes.component';
import { TemplatesComponent } from './components/pages/templates/templates.component';
import { DeliveriesComponent } from './components/pages/deliveries/deliveries.component';
import { OrdersWidgetRowComponent } from './components/pages/dashboard/widgets/orders-widget/orders-widget-row/orders-widget-row.component';
import { TemplatesWidgetRowComponent } from './components/pages/dashboard/widgets/templates-widget/templates-widget-row/templates-widget-row.component';
import { MeasurementsWidgetRowComponent } from './components/pages/dashboard/widgets/measurements-widget/measurements-widget-row/measurements-widget-row.component';
import { DeliveriesWidgetGroupComponent } from './components/pages/dashboard/widgets/deliveries-widget/deliveries-widget-group/deliveries-widget-group.component';
import { DeliveriesWidgetItemComponent } from './components/pages/dashboard/widgets/deliveries-widget/deliveries-widget-group/deliveries-widget-item/deliveries-widget-item.component';
import { ModalComponent } from './components/shared/modal/modal.component';
import { OverlayComponent } from './components/shared/overlay/overlay.component';
import { TestContentComponent } from './components/shared/test-content/test-content.component';
import { OrdersRowComponent } from './components/pages/orders/orders-row/orders-row.component';
import { FiltersComponent } from './components/pages/orders/filters/filters.component';
import { DashboardPocComponent } from './components/pages/dashboard-poc/dashboard-poc.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    TopNavComponent,
    FooterComponent,
    SiteNavComponent,
    OrdersWidgetComponent,
    DeliveriesWidgetComponent,
    TemplatesWidgetComponent,
    MeasurementsWidgetComponent,
    OrdersComponent,
    DeliveriesComponent,
    TemplatesComponent,
    MeasurementsComponent,
    AccountComponent,
    QuotesComponent,
    OrdersWidgetRowComponent,
    TemplatesWidgetRowComponent,
    MeasurementsWidgetRowComponent,
    DeliveriesWidgetGroupComponent,
    DeliveriesWidgetItemComponent,
    ModalComponent,
    OverlayComponent,
    TestContentComponent,
    OrdersRowComponent,
    FiltersComponent,
    DashboardPocComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    OverlayModule,
    PortalModule,
    AppRoutingModule,
    GridsterModule,
    RouterModule,
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})

export class AppModule { }
