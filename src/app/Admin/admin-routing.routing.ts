import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ViewVendorsComponent } from './components/view-vendors/view-vendors.component';
import { ViewUsersComponent } from './components/view-users/view-users.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path:"vendors",component:ViewVendorsComponent},
      {path:"users",component:ViewUsersComponent},
      {path:"categories",component:CategoriesComponent},
      {path:"home",component:HomeComponent},

    ]
  },
];

export const AdminRoutingRoutes = RouterModule.forChild(routes);
