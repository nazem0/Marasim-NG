import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Modules/components/register/register.component';
import { LoginComponent } from './Modules/components/login/login.component';
import { PageNotFoundComponent } from './Modules/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'vendor',
    loadChildren: () =>
      import('./Vendor/Vendor.module').then((m) => m.VendorModule),
  },
  {
    path: 'user', 
    loadChildren: () => import('./User/User.module').then(m => m.UserModule)
  },
 
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
