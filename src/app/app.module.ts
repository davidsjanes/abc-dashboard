import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { AccountComponent } from './components/account/account.component';
import { MeasurementsComponent } from './components/pages/measurements/measurements.component';
import { QuotesComponent } from './components/pages/quotes/quotes.component';
import { TemplatesComponent } from './components/pages/templates/templates.component';
import { DeliveriesComponent } from './components/pages/deliveries/deliveries.component';
import { OrdersWidgetRowComponent } from './components/pages/dashboard/widgets/orders-widget/orders-widget-row/orders-widget-row.component';
import { TemplatesWidgetRowComponent } from './components/pages/dashboard/widgets/templates-widget/templates-widget-row/templates-widget-row.component';
import { MeasurementsWidgetRowComponent } from './components/pages/dashboard/widgets/measurements-widget/measurements-widget-row/measurements-widget-row.component';

const appRoutes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'home', component: DashboardComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'deliveries', component: DeliveriesComponent},
  {path: 'templates', component: TemplatesComponent},
  {path: 'quotes', component: QuotesComponent},
  {path: 'measurements', component: MeasurementsComponent},
  {path: 'account', component: AccountComponent}
];

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
    MeasurementsWidgetRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes, {enableTracing: true}  // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
