import { VendorService } from 'src/app/Services/Vendor.service';
import { CityService } from 'src/app/Services/city.service';
import { GovernorateService } from 'src/app/Services/governorate.service';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CategoryPrice, GeneratePackage, GeneratedPackage } from 'src/app/Models/generatePackage';
import { CategoryService } from 'src/app/Services/Category.service';
import { ToastrService } from 'ngx-toastr';
import { Governorate } from 'src/app/Models/governorate';
import { City } from 'src/app/Models/City';
import { CategoryWithMinMaxViewModel } from 'src/app/Models/ICategory';
import { ScrollRevealService } from 'src/app/Services/Scroll-reveal.service';

@Component({
  selector: 'app-generate-package',
  templateUrl: './generate-package.component.html',
  styleUrls: ['./generate-package.component.css']
})
export class GeneratePackageComponent implements AfterViewInit {
  @ViewChild("budgetElement") budgetElement: ElementRef | null = null;
  @ViewChild("cityId") cityId: ElementRef | null = null;
  @ViewChild("govId") govId: ElementRef | null = null;
  vendors:GeneratedPackage[] | null = null;
  budget=0;
  categories: CategoryWithMinMaxViewModel[] = [];
  categoryPrice: CategoryPrice[] | null = null;
  govenorates: Governorate[] = [];
  cities: City[] = [];
  sr = this.scrollReveal.getScrollReveal();
  constructor(
    public categoryService: CategoryService,
    private toastr: ToastrService,
    private governorateService: GovernorateService,
    private cityService: CityService,
    private vendorService: VendorService,
    private scrollReveal:ScrollRevealService
  ) {    
    this.governorateService.get().subscribe({
      next: (governorates) => this.govenorates = governorates
    })
    this.categoryService.GetCategoriesWithMinMax().subscribe({
      next: categories => this.categories = categories,
    });

  }
  ngAfterViewInit(): void {
    this.budgetElement?.nativeElement.addEventListener('change', () => {
      let insertedBudget = this.budgetElement?.nativeElement.value
      if(isNaN(insertedBudget) || insertedBudget<1){        
        this.toastr.error("يجب إدخال الميزانية بشكل صحيح")
        return
      }
      else{
        this.budget = parseInt(insertedBudget);
        this.toastr.success(`لقد قُمت بإدخال ${this.budget.toLocaleString("ar-EG")} جنيه كميزانية`)
      }
    })
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
    let price = parseInt((document.getElementById(`category-${categoryId}`) as HTMLInputElement).value);

    //check if percentage is a valid number
    if (isNaN(price) || price < 1) {
      this.toastr.error("يجب إدخال مبلغ صحيح")
      return
    }
    if(price < this.categories.find(c=>c.id == categoryId)!.min){
      this.toastr.warning("لا يوجد خدمة بهذا السعر في هذه الفئة","المبلغ اقل من الحد الأدنى")
      return;
    }
    //check element already exists or not
    if (elementExists != -1) {
      if (this.categoryPrice[elementExists].price != price) {
        this.checkPrice(price, elementExists)
        this.categoryPrice[elementExists].price = price
        this.toastr.info("تم تعديل المبلغ")
      }
      else
        this.toastr.info("تم إضافتها بالفعل")
    }

    else {
      this.checkPrice(price)

      let element = {
        categoryId: categoryId,
        price: price
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
    this.toastr.success(`تم إزالة الفئة`)
    console.log(this.categoryPrice);
  }
  sumbit() {
    if (this.checkValidity()) {
      let generatePackage: GeneratePackage = {
        budget: this.budget,
        categoryPrice: this.categoryPrice!,
        cityId: this.cityId?.nativeElement.value,
        govId: this.govId?.nativeElement.value
      }
      this.vendorService.generatePackage(generatePackage).subscribe(
        {
          next: resp => {
            this.vendors = resp
          }
        }
      );
    }
  }
  showCategoryName(categoryId: number) {
    return `${this.categories.find(c => c.id == categoryId)?.name}`
  }
  getTotalPrice() {
    let totalPrice = 0;
    this.categoryPrice?.forEach(e => totalPrice += e.price)
    return totalPrice
  }
  checkValidity() {
    if (!this.categoryPrice || !this.budget || !this.govId?.nativeElement.value) {
      this.toastr.error("الميزانية، المحافظة، الفئات", "تأكد من ملئ البيانات")
      return false
    }
    if (this.categoryPrice!.length == 0) {
      this.toastr.error("قم بإضافة فئات اولاً")
      return false
    }
    return true
  }
  checkPrice(newPrice: number, elementIndex: number =-1) {
    let oldPrice = 0;
    if (this.categoryPrice && elementIndex != -1) {
      oldPrice = this.categoryPrice[elementIndex].price
      console.log(oldPrice);
    }
    let newTotalPrice = this.getTotalPrice() - oldPrice + newPrice
    if ( newTotalPrice > (this.budget)) {
      this.toastr.warning(`سيقوم هذا المبلغ بتخطي الميزانية بقيمة ${(newTotalPrice - (this.budget )).toLocaleString("ar-EG")} جنيه`)
    }
  }
}
