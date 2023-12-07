import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ViewVendorsComponent } from './components/view-vendors/view-vendors.component';
import { ViewUsersComponent } from './components/view-users/view-users.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HomeComponent } from './components/home/home.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { WithdrawalComponent } from './components/withdrawal/withdrawal.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path:"",component:HomeComponent},
      {path:"vendors/:page",component:ViewVendorsComponent},
      {path:"users/:page",component:ViewUsersComponent},
      {path:"categories",component:CategoriesComponent},
      {path:"payments",component:PaymentsComponent},
      {path:"withdrawals/:page",component:WithdrawalComponent},

    ]
  },
];

export const AdminRoutingRoutes = RouterModule.forChild(routes);
