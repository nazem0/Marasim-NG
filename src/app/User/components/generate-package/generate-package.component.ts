import { VendorService } from 'src/app/Services/Vendor.service';
import { CityService } from 'src/app/Services/city.service';
import { GovernorateService } from 'src/app/Services/governorate.service';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CategoryPrice, GeneratePackage } from 'src/app/Models/generatePackage';
import { CategoryService } from 'src/app/Services/Category.service';
import { ToastrService } from 'ngx-toastr';
import { Governorate } from 'src/app/Models/governorate';
import { City } from 'src/app/Models/City';
import { CategoryName } from 'src/app/Models/ICategory';
@Component({
  selector: 'app-generate-package',
  templateUrl: './generate-package.component.html',
  styleUrls: ['./generate-package.component.css']
})
export class GeneratePackageComponent implements AfterViewInit {
  @ViewChild("budget") budget: ElementRef | null = null;
  @ViewChild("cityId") cityId: ElementRef | null = null;
  @ViewChild("govId") govId: ElementRef | null = null;

  categories: CategoryName[] = [];
  categoryPrice: CategoryPrice[] | null = null;
  govenorates: Governorate[] = [];
  cities: City[] = [];
  constructor(
    public categoryService: CategoryService,
    private toastr: ToastrService,
    private governorateService: GovernorateService,
    private cityService: CityService,
    private vendorService:VendorService
  ) {
    this.governorateService.get().subscribe({
      next: (governorates) => this.govenorates = governorates
    })
    this.categoryService.GetNames().subscribe({
      next: categories => this.categories = categories,
    });

  }
  ngAfterViewInit(): void {
    this.govId?.nativeElement.addEventListener('change', () => {
      if (
        this.govId?.nativeElement.value != '' &&
        this.govId?.nativeElement.value != '0: null'
      )
        this.cityService
          .getByGovId(this.govId?.nativeElement.value)
          .subscribe((resp) => (this.cities = resp));
    });
  }

  addCategoryPrice(categoryId: number) {
    if (!this.categoryPrice) this.categoryPrice = [];
    let elementExists = this.categoryPrice.findIndex(e => e.categoryId == categoryId)
    let percentage = parseInt((document.getElementById(`category-${categoryId}`) as HTMLInputElement).value);

    //check if percentage is a valid number
    if (isNaN(percentage)) {
      this.toastr.error("يجب ادخال النسبة")
      return
    }

    //check element already exists or not
    if (elementExists != -1) {
      if (this.categoryPrice[elementExists].percentage != percentage) {
        this.categoryPrice[elementExists].percentage = percentage
        this.toastr.info("تم تعديل النسبة")
      }
      else
        this.toastr.info("تم إضافتها بالفعل")
    }

    else {
      let element = {
        categoryId: categoryId,
        percentage: percentage
      }
      this.categoryPrice.push(element)
      this.toastr.success("تمت الإضافة")
    }
    console.log(this.categoryPrice);
  }
  removeCategoryPrice(categoryId: number) {
    if (!this.categoryPrice) {
      this.toastr.error("لم تقم بإضافة أي فئة حتى تزيلها")
      return
    }
    let elementIndex = this.categoryPrice.findIndex(e => e.categoryId == categoryId)
    if (elementIndex == -1) {
      this.toastr.error("لم تقم بإضافة هذه الفئة حتى تزيلها")
      return
    }
    this.categoryPrice.splice(elementIndex, 1);
    console.log(this.categoryPrice);
  }
  sumbit() {
    if (!this.categoryPrice || !this.budget?.nativeElement.value || !this.govId?.nativeElement.value) {
      this.toastr.error("الميزانية، المحافظة، الفئات", "تأكد من ملئ البيانات")
      return
    }
    if (this.categoryPrice!.length == 0) {
      this.toastr.error("قم بأضافة فئات اولاً")
      return
    }
    let totalPercentage = 0;
    this.categoryPrice!.forEach(e => totalPercentage += e.percentage)
    if (totalPercentage > 100) {
      console.log(totalPercentage);
      this.toastr.error("يجب ألا تتخطى النسب 100%")
      return
    }
    else {
      let generatePackage: GeneratePackage = {
        budget: this.budget?.nativeElement.value,
        categoryPrice: this.categoryPrice!,
        cityId: this.cityId?.nativeElement.value,
        govId: this.govId?.nativeElement.value
      }
      this.vendorService.generatePackage(generatePackage).subscribe(
        {
          next:resp=>console.log(resp)
        }
      );
    }
  }
}
