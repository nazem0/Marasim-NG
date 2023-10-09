import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloudBannerComponent } from './components/cloud-banner/cloud-banner.component';


@NgModule({
  imports: [
    CommonModule
    
  ],
  declarations: [
    CloudBannerComponent
  ],
  providers:[
  ],
  exports:[
    CloudBannerComponent
  ]
})
export class SharedModule { }
