import { VendorService } from 'src/app/Services/Vendor.service';
import { Component, Input } from '@angular/core';
import { IVendorMidInfo } from 'src/app/Models/IVendor';
import { UserService } from 'src/app/Services/User.service';

@Component({
  selector: 'app-vendor-card',
  templateUrl: './vendor-card.component.html',
  styleUrls: ['./vendor-card.component.css']
})
export class VendorCardComponent {
@Input() vendor : IVendorMidInfo | null = null;
constructor(public vendorService:VendorService,public userService:UserService){}
}
