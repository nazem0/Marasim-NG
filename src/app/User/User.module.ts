import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserCheckListComponent } from './Components/user-check-list/user-check-list.component';
let userRoutes: Routes = [
  { path: 'check-list', component: UserCheckListComponent },

]

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  exports: [],
  declarations: [
    UserCheckListComponent
  ]
})
export class UserModule { }
