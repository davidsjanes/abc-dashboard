import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { OrdersComponent } from './components/pages/orders/orders.component';
import { DeliveriesComponent } from './components/pages/deliveries/deliveries.component';
import { TemplatesComponent } from './components/pages/templates/templates.component';
import { QuotesComponent } from './components/pages/quotes/quotes.component';
import { MeasurementsComponent } from './components/pages/measurements/measurements.component';
import { DashboardPocComponent } from './components/pages/dashboard-poc/dashboard-poc.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'home', component: DashboardComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'deliveries', component: DeliveriesComponent},
  {path: 'templates', component: TemplatesComponent},
  {path: 'quotes', component: QuotesComponent},
  {path: 'measurements', component: MeasurementsComponent},
  {path: 'account', component: DashboardPocComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
