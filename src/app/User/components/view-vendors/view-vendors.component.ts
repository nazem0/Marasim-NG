import { Component, OnInit } from '@angular/core';
import { ICategory, ICategoryWithVendors } from 'src/app/Models/ICategory';
import { CategoryService } from './../../../Services/Category.service';
import { IVendor } from 'src/app/Models/IVendor';

@Component({
  selector: 'app-view-vendors',
  templateUrl: './view-vendors.component.html',
  styleUrls: ['./view-vendors.component.css']
})
export class ViewVendorsComponent implements OnInit {
  Vendors: IVendor[] | null = null;
  categories: ICategory[] | null = null;
  CatWithVendors: ICategoryWithVendors | null = null;
  catID: number = 1; ////////////////////////////// WE NEEED TO GET ID

  constructor(private CategoryService: CategoryService) {

  }
  ngOnInit() {
    this.CategoryService.get()
      .subscribe((categories) => this.categories = categories
      )
    this.CategoryService.getVendorsByCategoryID(this.catID)
      .subscribe((result) => {
        console.log(result)
        this.CatWithVendors = result
      }
      )
  }



  rate: string = "";
  cost: string = '';
  country: string = "";

}
