import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Shared/components/register/register.component';
import { LoginComponent } from './Shared/components/login/login.component';
import { PageNotFoundComponent } from './Shared/components/page-not-found/page-not-found.component';
import { ContactComponent } from './Shared/components/contact/contact.component';
import { AuthGuard } from './Guards/user.guard';

const routes: Routes = [


  {
    path: 'vendor',
    loadChildren: () =>
      import('./Vendor/Vendor.module').then((m) => m.VendorModule),
      canActivate: [AuthGuard]
  },
  {
    path: '',
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
