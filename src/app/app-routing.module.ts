import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Modules/components/register/register.component';
import { LoginComponent } from './Modules/components/login/login.component';
import { VendorsPageComponent } from './Modules/components/vendors-page/vendors-page.component';

const routes: Routes = [
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'vendors', component:VendorsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
