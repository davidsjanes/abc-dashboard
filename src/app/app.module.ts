import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { SiteNavComponent } from './components/site-nav/site-nav.component';
import { OrdersWidgetComponent } from './components/dashboard/widgets/orders-widget/orders-widget.component';
import { DeliveriesWidgetComponent } from './components/dashboard/widgets/deliveries-widget/deliveries-widget.component';
import { TemplatesWidgetComponent } from './components/dashboard/widgets/templates-widget/templates-widget.component';
import { MeasurementsWidgetComponent } from './components/dashboard/widgets/measurements-widget/measurements-widget.component';

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
    MeasurementsWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
