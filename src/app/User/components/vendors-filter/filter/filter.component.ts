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
  pageIndex: number = 1;
  pageSize: number = 8;
  categoryId: number | null = null;
  governorateId: number | null = null;
  cityId: number | null = null;
  name: string | null = null;
  district: string | null = null;

categories: CategoryName[] = []
constructor(private categoryService : CategoryService){
  this.categoryService.GetNames().subscribe(
    {
      next: categories => this.categories = categories
    }
  )
}
}
