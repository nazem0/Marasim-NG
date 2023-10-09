import { Component } from '@angular/core';

@Component({
  selector: 'app-vendor-services',
  templateUrl: './vendor-services.component.html',
  styleUrls: ['./vendor-services.component.css']
})
export class VendorServicesComponent {
  User = {
    Name: 'أحمد محمد خالد',
    Category: 'مصور فوتوغرافى'
  }

  CARDS: any[] = [
    { title: 'تصوير افراح', srcImg: '../assets/img/hall.webp' },
    { title: 'تصوير ', srcImg: '../assets/img/photo_session.webp' },
    { title: 'تصوير افراح', srcImg: '../assets/img/chefs.webp' },
    { title: 'تصوير ', srcImg: '../assets/img/hairdresser.webp' },
    { title: 'تصوير افراح', srcImg: '../assets/img/club.webp' }
  ];

}
