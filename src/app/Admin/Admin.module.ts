import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingRoutes } from './admin-routing.routing';
import { LayoutComponent } from './layout/layout.component';
import { AdminDashboardComponent } from './layout/admin-dashboard/admin-dashboard.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AddCategoryComponent } from './components/categories/add-category/add-category.component';



@NgModule({
  declarations: [
    LayoutComponent,
    AdminDashboardComponent,
    CategoriesComponent,
    AddCategoryComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingRoutes
  ]
})
export class AdminModule { }
