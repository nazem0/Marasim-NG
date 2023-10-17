import { NgModule } from 'node_modules/@angular/core';
import { CommonModule } from 'node_modules/@angular/common';
import { AdminRoutingRoutes } from './admin-routing.routing';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingRoutes
  ],
  declarations: []
})
export class AdminModule { }
