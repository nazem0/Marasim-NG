import { ViewUserProfileComponent } from './components/view-profile/view-profile.component';
import { CheckoutPassComponent } from './components/checkout/checkout-pass/checkout-pass.component';
import { CheckoutFailComponent } from './components/checkout//checkout-fail/checkout-fail.component';
import { CheckoutLoadingComponent } from './components/checkout//checkout-loading/checkout-loading.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { Routes, RouterModule } from '@angular/router';
import { GeneratedPackagesComponent } from './components/generated-packages/generated-packages.component';
import { InvitationComponent } from './components/invitations/invitation/invitation.component';
import { UserEditProfileComponent } from './components/edit-profile/edit-profile.component';
import { InvitationListComponent } from './components/invitation-list/invitation-list.component';
import { UserCheckListComponent } from './components/user-check-list/user-check-list.component';
import { LayoutComponent } from './layout/layout.component';
import { ContactComponent } from '../Shared/components/contact/contact.component';
import { LoginComponent } from '../Shared/components/login/login.component';
import { RegisterComponent } from '../Shared/components/register/register.component';
import { FeedComponent } from './components/feed/feed.component';
import { VendorProfileComponent } from '../Shared/components/vendor-profile/vendor-profile.component';
import { FollowingsComponent } from './components/followings/followings.component';
import { CreateInvitationComponent } from './components/create-invitation/create-invitation.component';
import { NoFollowsComponent } from './components/no-follows/no-follows.component';
import { NoResultSearchComponent } from '../Shared/components/no-result-search/no-result-search.component';
import { LandingComponent } from '../Shared/components/landing/landing.component';
import { VendorRegisterationComponent } from '../Shared/components/vendor-register/vendor-register.component';
import { ViewVendorsComponent } from './components/view-vendors/view-vendors.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { VendorsFilterComponent } from './components/vendors-filter/vendors-filter.component';
import { GeneratePackageComponent } from './components/generate-package/generate-package.component';
import { RequestServiceComponent } from '../Shared/components/request-service/request-service.component';
import { InvitationsComponent } from './components/invitations/invitations.component';

const routes: Routes = [
  { path: "", component: LandingComponent, pathMatch: "full" },

  {
    path: '', component: LayoutComponent, children: [
      { path: 'check-list', component: UserCheckListComponent },
      { path: 'invitation-list', component: InvitationListComponent },
      { path: 'edit', component: UserEditProfileComponent },
      { path: 'generate-package', component: GeneratePackageComponent },
      { path: 'generated-packages', component: GeneratedPackagesComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'feed/:pageIndex', component: FeedComponent },
      { path: 'vendors/:id', component: VendorProfileComponent },
      { path: 'followings', component: FollowingsComponent },
      { path: 'checkout/:id', component: CheckoutComponent },
      { path: 'checkout/pass', component: CheckoutPassComponent },
      { path: 'checkout/fail', component: CheckoutFailComponent },
      { path: 'checkout/loading', component: CheckoutLoadingComponent },
      { path: 'vendors', component: ViewVendorsComponent },
      { path: 'view-profile', component: ViewUserProfileComponent },
      { path: "create-invitation", component: CreateInvitationComponent },
      { path: "no-follows", component: NoFollowsComponent },
      { path: "no-result", component: NoResultSearchComponent },
      { path: "reservation", component: ReservationsComponent },
      { path: "vendors-filteration/:pageIndex", component: VendorsFilterComponent },
      { path: "request-service/:serviceId", component: RequestServiceComponent },
      { path: 'invitation', component: InvitationsComponent }
    ],
  },
  { path: 'invitation/:id', component: InvitationComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'vendor-registeration', component: VendorRegisterationComponent },
  { path: 'login', component: LoginComponent },
  { path: "contact", component: ContactComponent },
];

export const UserRoutes = RouterModule.forChild(routes);
