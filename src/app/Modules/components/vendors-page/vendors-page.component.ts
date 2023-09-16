import { Component } from '@angular/core';

@Component({
  selector: 'app-vendors-page',
  templateUrl: './vendors-page.component.html',
  styleUrls: ['./vendors-page.component.css']
})
export class VendorsPageComponent {
  TITLES: any[] = [
    { title: 'القاعات', srcImg: '../assets/img/hall.webp' },
    { title: 'المصورين', srcImg: '../assets/img/photo_session.webp' },
    { title: 'المطاعم', srcImg: '../assets/img/chefs.webp' },
    { title: 'صالونات التجميل', srcImg: '../assets/img/hairdresser.webp' },
    { title: 'النوادى', srcImg: '../assets/img/club.webp' }
  ];


  CARDS: string[] = [
    'zzz',
    'zzz',
    'zzz',
  ];
}
