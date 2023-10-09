import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserCheckListComponent } from './components/user-check-list/user-check-list.component';
import { InvitationListComponent } from './components/invitation-list/invitation-list.component';
import { CustomerUiComponent } from './components/customer-ui/customer-ui.component';
import { UserProfileEditComponent } from './components/user-profile-edit/user-profile-edit.component';
import { CoverComponent } from './components/invitation/cover/cover.component';
import { InvitationComponent } from './components/invitation/Invitation.component';
import { CounterComponent } from './components/invitation/counter/counter.component';
import { BrideGroomComponent } from './components/invitation/bride-groom/bride-groom.component';
import { GeneratePackagesComponent } from './components/generate-packages/generate-packages.component';


let userRoutes: Routes = [
  { path: 'check-list', component: UserCheckListComponent },
  { path: 'invitation-list', component: InvitationListComponent },
  { path: 'edit', component: CustomerUiComponent },
  { path: 'profile-edit', component: UserProfileEditComponent }, //to vendor
  { path: 'invitation', component: InvitationComponent },
  {path:'generate-packages',component:GeneratePackagesComponent}

]

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
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
    GeneratePackagesComponent
    
  ]
})
export class UserModule { }
