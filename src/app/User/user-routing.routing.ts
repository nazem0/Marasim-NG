import { ViewUserProfileComponent } from './components/view-profile/view-profile.component';
import { ViewVendorsComponent } from './components/view-vendors/view-vendors.component';
import { CheckoutPassComponent } from './components/checkout/checkout-pass/checkout-pass.component';
import { CheckoutFailComponent } from './components/checkout//checkout-fail/checkout-fail.component';
import { CheckoutLoadingComponent } from './components/checkout//checkout-loading/checkout-loading.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { Routes, RouterModule } from '@angular/router';
import { GeneratedPackagesComponent } from './components/generated-packages/generated-packages.component';
import { GeneratePackagesComponent } from './components/generate-packages/generate-packages.component';
import { InvitationComponent } from './components/invitation/invitation.component';
import { UserEditProfileComponent } from './components/edit-profile/edit-profile.component';
import { InvitationListComponent } from './components/invitation-list/invitation-list.component';
import { UserCheckListComponent } from './components/user-check-list/user-check-list.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from '../Shared/components/home/home.component';
import { ContactComponent } from '../Shared/components/contact/contact.component';
import { LoginComponent } from '../Shared/components/login/login.component';
import { RegisterComponent } from '../Shared/components/register/register.component';
import { FeedComponent } from './components/feed/feed.component';
import { VendorProfileComponent } from './components/vendor-profile/vendor-profile.component';
import { FollowingsComponent } from './components/followings/followings.component';
import { CreateInvitationComponent } from './components/create-invitation/create-invitation.component';
import { CarouselComponent } from '../Shared/components/carousel/carousel.component';
import { PendingComponent } from './components/pending/pending.component';
import { NoFollowsComponent } from './components/no-follows/no-follows.component';
import { NoResultSearchComponent } from './components/no-result-search/no-result-search.component';
import { MapComponent } from '../Shared/components/map/map.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'check-list', component: UserCheckListComponent },
      { path: 'invitation-list', component: InvitationListComponent },
      { path: 'edit', component: UserEditProfileComponent },
      { path: 'invitation', component: InvitationComponent },
      { path: 'generate-packages', component: GeneratePackagesComponent },
      { path: 'generated-packages', component: GeneratedPackagesComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'feed', component: FeedComponent },
      { path: 'vendor-profile', component: VendorProfileComponent },
      { path: 'followings', component: FollowingsComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'checkout/pass', component: CheckoutPassComponent },
      { path: 'checkout/fail', component: CheckoutFailComponent },
      { path: 'checkout/loading', component: CheckoutLoadingComponent },
      { path: 'vendors', component: ViewVendorsComponent },
      { path: 'view-profile', component: ViewUserProfileComponent },
      { path: "create-invitation", component: CreateInvitationComponent },
      { path: "edit-profil", component: UserEditProfileComponent },
      { path: "carousel", component: CarouselComponent },
      { path: "reservation", component: PendingComponent },
      { path: "no-follows", component: NoFollowsComponent },
      { path: "no-result", component: NoResultSearchComponent },
      { path: "reservation", component: PendingComponent },
    ],
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path:'map', component:MapComponent}

];

export const UserRoutes = RouterModule.forChild(routes);
