import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Models/ICategory';
import { CategoryService } from '../../../Services/Category.service';
import { IVendor } from 'src/app/Models/IVendor';
import { VendorService } from 'src/app/Services/Vendor.service';

@Component({
  selector: 'app-view-vendors',
  templateUrl: './view-vendors.component.html',
  styleUrls: ['./view-vendors.component.css']
})
export class ViewVendorsComponent implements OnInit {
  Categories: ICategory[] | null = null;

  constructor(private CategoryService: CategoryService) {

  }
  ngOnInit() {
    this.CategoryService.GetAll()
      .subscribe((result) => this.Categories = result)
  }


  rate: string = "";
  cost: string = '';
  country: string = "";

}
