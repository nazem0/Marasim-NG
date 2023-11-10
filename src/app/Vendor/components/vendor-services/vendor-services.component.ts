import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment.development';
import { Component, OnInit } from '@angular/core';
import { IService } from 'src/app/Models/IService';
import { ServiceService } from 'src/app/Services/service.service';

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
  services: IService[] = []
  apiUrl = environment.serverUrl;
  constructor(private ServiceService: ServiceService, private CookieService: CookieService) { }


  ngOnInit() {
    this.ServiceService.GetServicesByVendorId(parseInt(this.CookieService.get("VendorId"))).subscribe(
      (services) => {
        console.log(services);
        this.services = services
      }
    )
  }


}
