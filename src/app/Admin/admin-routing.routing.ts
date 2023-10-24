import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
    ]
  },
];

export const AdminRoutingRoutes = RouterModule.forChild(routes);
