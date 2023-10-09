import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VendorsPageComponent } from './components/vendors-page/vendors-page.component';
import { CreateOfferComponent } from './components/create-offer/create-offer.component';
import { VendorReviewsComponent } from './components/vendor-reviews/vendor-reviews.component';
import { WorkHistoryComponent } from './components/work-history/work-history.component';
import { VendorServicesComponent } from './components/vendor-services/vendor-services.component';
import { AttachmentsComponent } from './components/work-history/attachments/attachments.component';
import { CommentsComponent } from './components/work-history/comments/comments.component';
import { ReservationComponent } from './components/reservation/reservation/reservation.component';

import { FormsModule } from '@angular/forms';
import { ReservationItemComponent } from './components/reservation/reservation-item/reservation-item.component';
import { ReactionsComponent } from './components/work-history/reactions/reactions.component';
import { PostComponent } from './components/work-history/post/post.component';
import { ReviewComponent } from './components/vendor-reviews/review/review.component';
import { CreatePostComponent } from './components/work-history/create-post/create-post.component';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';
import { SharedModule } from '../Shared/Shared.module';
import { EditServiceComponent } from './Components/edit-service/edit-service.component';
import { AddServiceComponent } from './Components/add-service/add-service.component';
import { PendingComponent } from '../Shared/components/pending/pending.component';

let vendorRoutes: Routes = [
  { path: '', component: VendorsPageComponent },
  { path: 'service-details', component: ServiceDetailsComponent },
  { path: 'create-offer', component: CreateOfferComponent },
  { path: 'reviews', component: VendorReviewsComponent },
  { path: 'services', component: VendorServicesComponent },
  { path: 'work-history', component: WorkHistoryComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'edit-service', component: EditServiceComponent },
  { path: 'add-service', component: AddServiceComponent},
  {path: 'pending', component: PendingComponent}
  // { path: 'vendor-services', component: VendorServicesComponent }

]

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forChild(vendorRoutes),
    FormsModule,
    SharedModule
  ],
  exports: [],
  declarations: [
    VendorsPageComponent,
    CreateOfferComponent,
    VendorReviewsComponent,
    WorkHistoryComponent,
    PostComponent,
    AttachmentsComponent,
    CommentsComponent,
    ReactionsComponent,
    ReservationComponent,
    ReservationItemComponent,
    VendorServicesComponent,
    ReviewComponent,
    CreatePostComponent,
    ServiceDetailsComponent
  ]
})
export class VendorModule { }
