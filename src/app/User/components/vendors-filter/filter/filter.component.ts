import { CategoryService } from 'src/app/Services/Category.service';
import { ICategory } from 'src/app/Models/ICategory';
import { Component } from '@angular/core';
import { CategoryName } from 'src/app/Models/CategoryName';

@Component({
  selector: 'app-vendors-filter-options',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class VendorsFilterOptionsComponent {
  categories :CategoryName[] =[]
  constructor(private categoryService : CategoryService){
    this.categoryService.GetNames().subscribe(
      {
        next:categories=>this.categories=categories
      }
    )
  }
}
