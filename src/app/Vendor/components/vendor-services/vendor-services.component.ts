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
  services: IService[] = []
  constructor(private VendorService: VendorService) {
    this.VendorService.getServicesWithAttachments(3).subscribe(
      (services) => this.services = services
    )

  }
  ngOnInit() {
  }


}
