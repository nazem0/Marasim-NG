import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCheckListComponent } from './components/user-check-list/user-check-list.component';
import { InvitationListComponent } from './components/invitation-list/invitation-list.component';
import { UserEditProfileComponent } from './components/edit-profile/edit-profile.component';
import { UserProfileEditComponent } from './components/user-profile-edit/user-profile-edit.component';
import { CoverComponent } from './components/invitation/cover/cover.component';
import { InvitationComponent } from './components/invitation/Invitation.component';
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
import { VendorProfileComponent } from './components/vendor-profile/vendor-profile.component';

import { FilterComponent } from './components/feed/filter/filter.component';


@NgModule({

  imports: [
    CommonModule,
    UserRoutes,
    SharedModule
  ],
  exports: [],
  declarations: [
    UserCheckListComponent,
    InvitationListComponent,
    UserEditProfileComponent,
    UserProfileEditComponent,
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
    FilterComponent
  ]
})
export class UserModule { }
