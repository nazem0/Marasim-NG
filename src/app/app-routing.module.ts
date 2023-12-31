import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './Shared/components/page-not-found/page-not-found.component';
import { VendorAuthGuard } from './Guards/vendor.guard';
import { AdminAuthGuard } from './Guards/admin.guard';

const routes: Routes = [


  {
    path: '',
    loadChildren: () => import('./User/User.module').then(m => m.UserModule),
  },
  {
    path: 'vendor',
    loadChildren: () =>
      import('./Vendor/Vendor.module').then((m) => m.VendorModule)
    ,canActivate: [VendorAuthGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./Admin/Admin.module').then(m => m.AdminModule),
    canActivate:[AdminAuthGuard]
  },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
