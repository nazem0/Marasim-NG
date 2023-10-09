import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Shared/components/register/register.component';
import { LoginComponent } from './Shared/components/login/login.component';
import { PageNotFoundComponent } from './Shared/components/page-not-found/page-not-found.component';
import { HomeComponent } from './Shared/components/home/home.component';
import { ContactComponent } from './Shared/components/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },

  {
    path: 'vendor',
    loadChildren: () =>
      import('./Vendor/Vendor.module').then((m) => m.VendorModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./User/User.module').then(m => m.UserModule)
  },
  {
    path:'admin',
    loadChildren:()=> import('./Admin/Admin.module').then(m=>m.AdminModule)
  },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
