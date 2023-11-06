import { Component } from '@angular/core';
import { ICategory } from 'src/app/Models/ICategory';
import { CategoryService } from 'src/app/Services/Category.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  categories: ICategory[] | null = null;

  constructor(private CategoryService: CategoryService) {

    this.CategoryService.GetAll().subscribe(
      (categories) => this.categories = categories
    )

  }
}
