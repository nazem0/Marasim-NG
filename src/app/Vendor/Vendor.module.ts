import { NgChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../Shared/Shared.module';
import { LayoutComponent } from './layout/layout.component';
import { VendorsPageComponent } from './components/vendors-page/vendors-page.component';
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
import { FollowerComponent } from './components/followers/follower/follower.component';
import { StatNavComponent } from './components/statistic/stat-nav.component';
import { TotalEarningsChartComponent } from './components/statistic/total-earnings-chart/total-earnings-chart.component';
import { TotalServicesChartComponent } from './components/statistic/total-services-chart/total-services-chart.component';
import { CompletedOrdersChartComponent } from './components/statistic/completed-orders-chart/completed-orders-chart.component';
import { FilterComponent } from './components/vendors-page/filter/filter.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { VendorDashboardComponent } from './layout/vendor-dashboard/vendor-dashboard.component';
import { VendorRoutes } from './vendor-routing.routing';
import { NgxPaginationModule } from 'ngx-pagination';
import { CreateServiceComponent } from './components/vendor-services/create-service/create-service.component';




@NgModule({
  imports: [
    CommonModule,
    VendorRoutes,
    FormsModule,
    SharedModule,
    NgChartsModule,
    ReactiveFormsModule,
    NgxPaginationModule
    
  ],
  exports: [],
  declarations: [
    VendorsPageComponent,
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
    FollowersComponent,
    FollowerComponent,
    StatNavComponent,
    TotalEarningsChartComponent,
    TotalServicesChartComponent,
    CompletedOrdersChartComponent,
    FilterComponent,
    ProfileEditComponent,
    VendorDashboardComponent,
    EditServiceComponent,
    CreateServiceComponent,
  ]
})
export class VendorModule { }
