import { Component } from '@angular/core';
import { ICategory } from 'src/app/Models/ICategory';
import { CategoryService } from './../../../Services/Category.service';

@Component({
  selector: 'app-view-vendors',
  templateUrl: './view-vendors.component.html',
  styleUrls: ['./view-vendors.component.css']
})
export class ViewVendorsComponent {
  TITLES: any[] = [
    { title: 'القاعات', srcImg: '../assets/img/hall.webp' },
    { title: 'المصورين', srcImg: '../assets/img/photo_session.webp' },
    { title: 'المطاعم', srcImg: '../assets/img/chefs.webp' },
    { title: 'صالونات التجميل', srcImg: '../assets/img/hairdresser.webp' },
    { title: 'النوادى', srcImg: '../assets/img/club.webp' }
  ];
  categories:ICategory[]|null=null;
  constructor(private CategoryService:CategoryService){
    this.CategoryService.get().subscribe(
      (categories)=>this.categories=categories
    )
  }
  poto=this.TITLES[0].srcImg
  CARDS: string[] = [
    'zzz',
    'zzz',
    'zzz',
  ];

rate:string="";
cost:string='';
country:string="";

}
