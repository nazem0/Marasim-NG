import { CityService } from 'src/app/Services/city.service';
import { GovernorateService } from 'src/app/Services/governorate.service';
import { VendorService } from 'src/app/Services/Vendor.service';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { IVendorMidInfo } from 'src/app/Models/IVendor';
import { PaginationViewModel } from 'src/app/Models/PaginationViewModel';
import { CategoryName } from 'src/app/Models/CategoryName';
import { CategoryService } from 'src/app/Services/Category.service';
import { Governorate } from 'src/app/Models/governorate';
import { City } from 'src/app/Models/City';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendors-filter',
  templateUrl: './vendors-filter.component.html',
  styleUrls: ['./vendors-filter.component.css']
})
export class VendorsFilterComponent implements AfterViewInit {
  @ViewChild("gov") gov: ElementRef | null = null;
  vendors: PaginationViewModel<IVendorMidInfo> | null = null;
  categories: CategoryName[] = []
  categoriesInput: number[] = [];
  pageIndex: number = 1;
  pageSize: number = 8;
  categoryId: number | null = null;
  governorateId: number | null = null;
  cityId: number | null = null;
  name: string | null = null;
  district: string | null = null;
  govs: Governorate[] = [];
  cities: City[] = [];
  form: FormGroup;
  constructor(
    private categoryService: CategoryService,
    private vendorService: VendorService,
    private governorateService: GovernorateService,
    private cityService: CityService,
    private formBuilder: FormBuilder,
    private activatedRoute:ActivatedRoute) {
      this.activatedRoute.paramMap.subscribe(
        {
          next:params=>this.pageIndex = parseInt(params.get("pageIndex")!)
        }
      )
    this.form = this.formBuilder.group({
      PageSize: [8], // Default value for PageSize
      Categories: [null], // Default value for Categories
      GovernorateId: [null], // Default value for GovernorateId
      CityId: [null], // Default value for CityId
      Name: [null], // Default value for Name
      District: [null] // Default value for District
    });
    this.categoryService.GetNames().subscribe(
      {
        next: categories => this.categories = categories
      }
    )
    this.governorateService.get().subscribe(
      {
        next: govs => this.govs = govs
      }
    )
    this.vendorService.filterVendors(this.pageIndex).subscribe(
      {
        next: vendors => this.vendors = vendors
      }
    )
  }
  ngAfterViewInit(): void {
    this.gov?.nativeElement.addEventListener('change', (e: any) => {
      this.cityService.getByGovId(this.gov?.nativeElement.value).subscribe((resp) => this.cities = resp)
    });
  }
  getData() {
    console.log(this.form.value);
    this.vendorService.filterVendors(this.pageIndex,this.form.value).subscribe(
      {
        next: vendors => this.vendors = vendors
      }
    )
  }
  onCategoryChange(categoryId: number, event: Event) {
    let category = event.target as HTMLInputElement
    if (category.checked) {
      this.categoriesInput.push(categoryId);
    } else {
      this.categoriesInput.splice(this.categoriesInput.indexOf(categoryId), 1);
    }

    // update form control
    this.form.controls['Categories'].setValue(this.categoriesInput);
  }
}
