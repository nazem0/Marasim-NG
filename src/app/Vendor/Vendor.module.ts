import { NgxPaginationModule } from 'ngx-pagination';
import { NgChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../Shared/Shared.module';
import { LayoutComponent } from './layout/layout.component';
import { CreateOfferComponent } from './components/vendor-services/action-buttons/create-offer/create-offer.component';
import { VendorReviewsComponent } from './components/vendor-reviews/vendor-reviews.component';
import { WorkHistoryComponent } from './components/work-history/work-history.component';
import { VendorServicesComponent } from './components/vendor-services/vendor-services.component';
import { ReservationComponent } from './components/reservation/reservation/reservation.component';
import { ReservationItemComponent } from './components/reservation/reservation-item/reservation-item.component';
import { CreatePostComponent } from './components/work-history/create-post/create-post.component';
import { EditServiceComponent } from './components/edit-service/edit-service.component';
import { VendorFormComponent } from './components/vendor-form/vendor-form.component';
import { ProfileVendorsideComponent } from './components/profile-vendorside/profile-vendorside.component';
import { ActionButtonsComponent } from './components/vendor-services/action-buttons/action-buttons.component';
import { FollowersComponent } from './components/followers/followers.component';
import { StatNavComponent } from './components/statistic/stat-nav.component';
import {TotalSalesChartComponent } from './components/statistic/total-sales-chart/total-sales-chart.component';
import { CompletedOrdersChartComponent } from './components/statistic/completed-orders-chart/completed-orders-chart.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { VendorRoutes } from './vendor-routing.routing';
import { WalletComponent } from './components/wallet/wallet.component';
import { VhomeComponent } from './components/vhome/vhome.component';
import { CreateServiceComponent } from './components/create-service/create-service.component';
import { VDashboardComponent } from './layout/v-dashboard/v-dashboard.component';
import { VendorNavToggleComponent } from './components/vendor-nav-toggle/vendor-nav-toggle.component';
import { EditServiceAttachmentsComponent } from './components/edit-service-attachments/edit-service-attachments.component';

@NgModule({
  imports: [
    CommonModule,
    VendorRoutes,
    FormsModule,
    SharedModule,
    NgChartsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ],
  exports: [
    FollowersComponent,
  ],
  declarations: [
    CreateOfferComponent,
    VendorReviewsComponent,
    WorkHistoryComponent,
    ReservationComponent,
    ReservationItemComponent,
    VendorServicesComponent,
    CreatePostComponent,
    LayoutComponent,
    VendorFormComponent,
    ProfileVendorsideComponent,
    ActionButtonsComponent,
    StatNavComponent,
    TotalSalesChartComponent,
    CompletedOrdersChartComponent,
    ProfileEditComponent,
    EditServiceComponent,
    WalletComponent,
    VhomeComponent,
    CreateServiceComponent,
    VDashboardComponent,
    VendorNavToggleComponent,
    EditServiceAttachmentsComponent,
  ]
})
export class VendorModule { }
