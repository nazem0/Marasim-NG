import { ICategory } from 'src/app/Models/ICategory';
import { CategoryService } from '../../../../Services/Category.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  categories:ICategory[]|null=null;
constructor(private CategoryService:CategoryService){
  this.CategoryService.get().subscribe(
    (categories)=>this.categories=categories
  )
}}
