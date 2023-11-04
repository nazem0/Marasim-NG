import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment.development';
import { VendorService } from 'src/app/Services/Vendor.service';
import { Component, OnInit } from '@angular/core';
import { IService } from 'src/app/Models/IService';

@Component({
  selector: 'app-vendor-services',
  templateUrl: './vendor-services.component.html',
  styleUrls: ['./vendor-services.component.css']
})
export class VendorServicesComponent implements OnInit {
  User = {
    Name: 'أحمد محمد خالد',
    Category: 'مصور فوتوغرافى'
  }
  services: any[] = []
  apiUrl=environment.serverUrl;
  constructor(private VendorService: VendorService, private CookieService:CookieService) {
    
    this.VendorService.getServicesByVendorId(parseInt(this.CookieService.get("VendorId"))).subscribe(
      (services) => {
        console.log(services);
        this.services = services
      }
    )

  }
  ngOnInit() {
  }


}
