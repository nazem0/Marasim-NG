import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VendorsPageComponent } from './Components/vendors-page/vendors-page.component';
import { VendorProfilePageComponent } from './Components/vendor-profile-page/vendor-profile-page.component';
import { CreateOfferComponent } from './Components/create-offer/create-offer.component';
import { VendorReviewsComponent } from './Components/vendor-reviews/vendor-reviews.component';
import { WorkHistoryComponent } from './Components/work-history/work-history.component';
import { VendorServicesComponent } from './Components/vendor-services/vendor-services.component';


let vendorRoutes: Routes = [
  { path: '', component: VendorsPageComponent },
  { path: 'profile', component: VendorProfilePageComponent },
  { path: 'create-offer', component: CreateOfferComponent },
  { path: 'reviews', component: VendorReviewsComponent },
  {path:'work-history', component:WorkHistoryComponent},
  {path:'vendor-services', component:VendorServicesComponent}
]

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forChild(vendorRoutes)
  ],
  exports: [],
  declarations: [
    VendorsPageComponent,
    VendorProfilePageComponent,
    CreateOfferComponent,
    VendorReviewsComponent,
    WorkHistoryComponent,
    VendorServicesComponent,
  ]
})
export class VendorModule { }
