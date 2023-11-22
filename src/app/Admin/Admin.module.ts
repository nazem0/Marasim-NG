import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingRoutes } from './admin-routing.routing';
import { LayoutComponent } from './layout/layout.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ViewUsersComponent } from './components/view-users/view-users.component';
import { ViewVendorsComponent } from './components/view-vendors/view-vendors.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { HomeComponent } from './components/home/home.component';
import { NgChartsModule } from 'ng2-charts';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { SharedModule } from '../Shared/Shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    LayoutComponent,
    CategoriesComponent,
    ViewUsersComponent,
    ViewVendorsComponent,
    PaymentsComponent,
    ReservationsComponent,
    HomeComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingRoutes,
    NgChartsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ]
})
export class AdminModule { }
