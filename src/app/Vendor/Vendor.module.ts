import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VendorsPageComponent } from './Components/vendors-page/vendors-page.component';
import { CreateOfferComponent } from './Components/create-offer/create-offer.component';
import { VendorReviewsComponent } from './Components/vendor-reviews/vendor-reviews.component';
import { WorkHistoryComponent } from './Components/work-history/work-history.component';
import { VendorServicesComponent } from './Components/vendor-services/vendor-services.component';
import { AttachmentsComponent } from './Components/work-history/attachments/attachments.component';
import { CommentsComponent } from './Components/work-history/comments/comments.component';
import { ReservationComponent } from './Components/reservation/reservation/reservation.component';

import { FormsModule } from '@angular/forms';
import { ReservationItemComponent } from './Components/reservation/reservation-item/reservation-item.component';
import { ReactionsComponent } from './Components/work-history/reactions/reactions.component';
import { PostComponent } from './Components/work-history/post/post.component';
import { ReviewComponent } from './Components/vendor-reviews/review/review.component';
import { CreatePostComponent } from './Components/work-history/create-post/create-post.component';
import { ServiceDetailsComponent } from './Components/service-details/service-details.component';

let vendorRoutes: Routes = [
  { path: '', component: VendorsPageComponent },
  { path: 'service-details', component: ServiceDetailsComponent },
  { path: 'create-offer', component: CreateOfferComponent },
  { path: 'reviews', component: VendorReviewsComponent },
  {path:'services', component:VendorServicesComponent}
  { path: 'work-history', component: WorkHistoryComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'vendor-services', component: VendorServicesComponent }

]

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forChild(vendorRoutes),
    FormsModule
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
    CreatePostComponent
  ]
})
export class VendorModule { }
