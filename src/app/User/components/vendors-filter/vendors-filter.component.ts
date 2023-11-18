import { VendorService } from 'src/app/Services/Vendor.service';
import { Component } from '@angular/core';
import { IVendorMidInfo } from 'src/app/Models/IVendor';
import { PaginationViewModel } from 'src/app/Models/PaginationViewModel';

@Component({
  selector: 'app-vendors-filter',
  templateUrl: './vendors-filter.component.html',
  styleUrls: ['./vendors-filter.component.css']
})
export class VendorsFilterComponent {
vendors:PaginationViewModel<IVendorMidInfo>|null = null;
constructor(private vendorService:VendorService){
  this.vendorService.filterVendors().subscribe(
    {
      next:vendors=>this.vendors=vendors
    }
  )
}
}
