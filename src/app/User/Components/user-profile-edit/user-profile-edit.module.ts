import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PersonalEditComponent } from './components/personal-edit/personal-edit.component';


let userRoutes: Routes = [
    { path: 'Personal-edit', component: PersonalEditComponent },
  
  
  ]


  
@NgModule({

    imports: [
      CommonModule,
      RouterModule.forChild(userRoutes)
    ],
    exports: [],
    declarations: [
  ]
  })
  export class UserProfileEditModule { }
  
  