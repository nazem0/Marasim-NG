import { Component } from '@angular/core';

@Component({
  selector: 'app-vendor-profile-page',
  templateUrl: './vendor-profile-page.component.html',
  styleUrls: ['./vendor-profile-page.component.css']
})
export class VendorProfilePageComponent {

  scrollToTargetAdjusted(x: string) {
    var elementPosition = document.getElementById(x)!.getBoundingClientRect().top;
    var offsetPosition: number = (elementPosition) + (window.scrollY - 80)  ;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
  
}
