import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCheckListComponent } from './components/user-check-list/user-check-list.component';
import { InvitationListComponent } from './components/invitation-list/invitation-list.component';
import { UserEditProfileComponent } from './components/edit-profile/edit-profile.component';
import { CoverComponent } from './components/invitation/cover/cover.component';
import { InvitationComponent } from './components/invitation/invitation.component';
import { CounterComponent } from './components/invitation/counter/counter.component';
import { BrideGroomComponent } from './components/invitation/bride-groom/bride-groom.component';
import { GeneratePackagesComponent } from './components/generate-packages/generate-packages.component';
import { GeneratedPackagesComponent } from './components/generated-packages/generated-packages.component';
import { LayoutComponent } from './layout/layout.component';
import { NavBarComponent } from '../Shared/components/nav-bar/nav-bar.component';
import { UserRoutes } from './user-routing.routing';
import { GeneratedPackageCardComponent } from './components/generated-packages/generated-package-card/generated-package-card.component';
import { FeedComponent } from './components/feed/feed.component';
import { SharedModule } from '../Shared/Shared.module';
import { VendorProfileComponent } from '../Shared/components/vendor-profile/vendor-profile.component';
import { FilterComponent } from './components/feed/filter/filter.component';
import { FollowingsComponent } from './components/followings/followings.component';
import { FollowingComponent } from './components/followings/following/following.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CheckoutPassComponent } from './components/checkout/checkout-pass/checkout-pass.component';
import { CheckoutFailComponent } from './components/checkout/checkout-fail/checkout-fail.component';
import { CheckoutLoadingComponent } from './components/checkout/checkout-loading/checkout-loading.component';
import { ViewUserProfileComponent } from './components/view-profile/view-profile.component';
import { CreateInvitationComponent } from './components/create-invitation/create-invitation.component';
import { PageNotFoundComponent } from '../Shared/components/page-not-found/page-not-found.component';
import { ContactComponent } from '../Shared/components/contact/contact.component';
import { HomeComponent } from '../Shared/components/home/home.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { ViewVendorsComponent } from './components/view-vendors/view-vendors.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddReviewComponent } from './components/reservations/add-review/add-review.component';
import { FilterdComponent } from './components/filterd/filterd.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({

  imports: [
    CommonModule,
    UserRoutes,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  exports: [],
  declarations: [
    UserCheckListComponent,
    ViewVendorsComponent,
    InvitationListComponent,
    UserEditProfileComponent,
    CoverComponent,
    InvitationComponent,
    CounterComponent,
    BrideGroomComponent,
    GeneratePackagesComponent,
    GeneratedPackagesComponent,
    LayoutComponent,
    NavBarComponent,
    GeneratedPackageCardComponent,
    FeedComponent,
    VendorProfileComponent,
    FilterComponent,
    FollowingsComponent,
    FollowingComponent,
    CheckoutComponent,
    CheckoutPassComponent,
    CheckoutFailComponent,
    CheckoutLoadingComponent,
    ViewUserProfileComponent,
    CreateInvitationComponent,
    PageNotFoundComponent,
    ContactComponent,
    HomeComponent,
    ReservationsComponent,
    AddReviewComponent,
    FilterdComponent,
  ]
})
export class UserModule { }
