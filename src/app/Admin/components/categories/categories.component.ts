import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ICategory } from 'src/app/Models/ICategory';
import { CategoryService } from 'src/app/Services/Category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories: ICategory[] | null = null;
  categoryForm: FormGroup;
  data: FormData;
  formIsValid = false;
  constructor(
    private CategoryService: CategoryService,
    private FormBuilder: FormBuilder,
    private Toastr: ToastrService
  ) {
    this.data = new FormData();
    this.categoryForm = this.FormBuilder.group({
      Name: [null, [Validators.required, Validators.maxLength(30),Validators.minLength(3)]],
    });

    this.categoryForm.statusChanges.subscribe(() => {
      this.formIsValid = this.categoryForm.valid;
    });
  }

  getData() {
    this.CategoryService.GetAll()
      .subscribe({
        next: (result) => {
          this.categories = result;
        },
        error: (error) => {
          console.log(error)
        }
      })
  }
  ngOnInit() {
    this.getData();
  }

  addCategory() {
    console.log("clicked");
    if (this.categoryForm.valid) {
      this.data.set('Name', this.categoryForm.get('Name')?.value);
      this.CategoryService.AddCategory(this.data)
        .subscribe({
          next: (data) => {
            this.Toastr.success("تم إضافة الفئة")
            console.log(data);
            this.getData();
          },
          error: (error) => {
            this.Toastr.error("برجاء التأكد من الاسم والمحاولة مرة أخرى", "حدث خطأ");
            console.log(error);
          }
        });
    }
    this.categoryForm.reset();
    this.data = new FormData();
  }
}
