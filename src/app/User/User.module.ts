import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserCheckListComponent } from './Components/user-check-list/user-check-list.component';
import { InvitationListComponent } from './Components/invitation-list/invitation-list.component';
import { CustomerUiComponent } from './Components/customer-ui/customer-ui.component';
import { UserProfileEditComponent } from './Components/user-profile-edit/user-profile-edit.component';


let userRoutes: Routes = [
  { path: 'check-list', component: UserCheckListComponent },
  { path: 'invitation-list', component: InvitationListComponent },
  { path: 'edit', component: CustomerUiComponent },
  { path: 'profile-edit', component: UserProfileEditComponent } //to vendor
  

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
    
    
  ]
})
export class UserModule { }
