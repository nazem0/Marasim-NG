import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCheckListComponent } from './components/user-check-list/user-check-list.component';
import { InvitationListComponent } from './components/invitation-list/invitation-list.component';
import { CustomerUiComponent } from './components/customer-ui/customer-ui.component';
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


@NgModule({

  imports: [
    CommonModule,
    UserRoutes
  ],
  exports: [],
  declarations: [
    UserCheckListComponent,
    InvitationListComponent,
    CustomerUiComponent,
    UserProfileEditComponent,
    CoverComponent,
    InvitationComponent,
    CounterComponent,
    BrideGroomComponent,
    GeneratePackagesComponent,
    GeneratedPackagesComponent,
    LayoutComponent,
    NavBarComponent,
    GeneratedPackageCardComponent
  ]
})
export class UserModule { }
