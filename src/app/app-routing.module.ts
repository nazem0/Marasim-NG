import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './Shared/components/page-not-found/page-not-found.component';
import { AuthGuard } from './Guards/vendor.guard';

const routes: Routes = [


  {
    path: '',
    loadChildren: () => import('./User/User.module').then(m => m.UserModule),
  },
  {
    path: 'vendor',
    loadChildren: () =>
      import('./Vendor/Vendor.module').then((m) => m.VendorModule)
    ,canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./Admin/Admin.module').then(m => m.AdminModule)
  },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
