import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ViewVendorsComponent } from './components/view-vendors/view-vendors.component';
import { ViewUsersComponent } from './components/view-users/view-users.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HomeComponent } from './components/home/home.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { EditAdminComponent } from './components/edit-admin/edit-admin.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path:"",component:HomeComponent},
      {path:"vendors",component:ViewVendorsComponent},
      {path:"users",component:ViewUsersComponent},
      {path:"categories",component:CategoriesComponent},
      {path:"payments",component:PaymentsComponent},
      {path:"edit",component:EditAdminComponent}
    ]
  },
];

export const AdminRoutingRoutes = RouterModule.forChild(routes);
