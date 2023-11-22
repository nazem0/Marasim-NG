import { CityService } from 'src/app/Services/city.service';
import { GovernorateService } from 'src/app/Services/governorate.service';
import { VendorService } from 'src/app/Services/Vendor.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IVendorMidInfo } from 'src/app/Models/IVendor';
import { PaginationViewModel } from 'src/app/Models/PaginationViewModel';
import { CategoryName } from 'src/app/Models/CategoryName';
import { CategoryService } from 'src/app/Services/Category.service';
import { Governorate } from 'src/app/Models/governorate';
import { City } from 'src/app/Models/City';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vendors-filter',
  templateUrl: './vendors-filter.component.html',
  styleUrls: ['./vendors-filter.component.css']
})
export class VendorsFilterComponent implements AfterViewInit {
  @ViewChild("gov") gov: ElementRef | null = null;
  noResult=false;
  vendors: PaginationViewModel<IVendorMidInfo> | null = null;
  categories: CategoryName[] = []
  categoriesInput: string[] = [];
  pageIndex: number = 1;
  pageSize: number = 8;
  governorateId: string | null = null;
  cityId: string | null = null;
  name: string | null = null;
  district: string | null = null;
  govs: Governorate[] = [];
  cities: City[] = [];
  rate: string | null = null;
  form: FormGroup;
  constructor(
    private categoryService: CategoryService,
    private vendorService: VendorService,
    private governorateService: GovernorateService,
    private cityService: CityService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.paramMap.subscribe(
      {
        next: params => {
          this.pageIndex = parseInt(params.get("pageIndex")!)
        }
      }
    )
    this.activatedRoute.queryParamMap.subscribe({
      next: queryParams => {
        let categoriesParam = queryParams.get("categories")?.split(",");
        let governorateIdParam = queryParams.get("governorateId");
        let cityIdParam = queryParams.get("cityId");
        let nameParam = queryParams.get("name");
        let districtParam = queryParams.get("district");
        let rateParam = queryParams.get("rate");
        if (categoriesParam && categoriesParam.length > 0)
          this.categoriesInput = categoriesParam
        if (governorateIdParam) {
          this.governorateId = governorateIdParam
          this.cityService.getByGovId(this.governorateId).subscribe((resp) => this.cities = resp)
        }
        if (cityIdParam)
          this.cityId = cityIdParam
        if (nameParam)
          this.name = nameParam
        if (districtParam)
          this.district = districtParam
        if (rateParam)
          this.rate = rateParam

        this.getData();
      }
    })
    this.form = this.formBuilder.group({
      PageSize: [8], // Default value for PageSize
      Categories: [this.categoriesInput], // Default value for Categories
      GovernorateId: [this.governorateId], // Default value for GovernorateId
      CityId: [this.cityId], // Default value for CityId
      Name: [this.name], // Default value for Name
      District: [this.district], // Default value for District
      Rate: [this.rate]
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
  }
  ngAfterViewInit(): void {
    this.gov?.nativeElement.addEventListener('change', () => {
      if (this.gov?.nativeElement.value == "")
        this.form.get("CityId")?.setValue(null);

      if (this.gov?.nativeElement.value != "" && this.gov?.nativeElement.value != "0: null")
        this.cityService.getByGovId(this.gov?.nativeElement.value).subscribe((resp) => this.cities = resp)
    });
  }
  filter() {
    this.router.navigate([], {
      queryParams: {
        name: this.form.get("Name")?.value == "" ? null : this.form.get("Name")?.value,
        categories: this.form.get("Categories")?.value.join() == "" ? null : this.form.get("Categories")?.value.join(),
        governorateId: this.form.get("GovernorateId")?.value == "" ? null : this.form.get("GovernorateId")?.value,
        cityId: this.form.get("CityId")?.value == "" ? null : this.form.get("CityId")?.value,
        district: this.form.get("District")?.value == "" ? null : this.form.get("District")?.value,
      }
    })
  }
  getData() {
    this.vendorService.filterVendors(this.pageIndex, this.activatedRoute.snapshot.queryParams).subscribe(
      {
        next: vendors => {
          this.vendors = vendors
          this.noResult = !this.vendors.count
        }
      }
    )
  }
  onCategoryChange(categoryId: string, event: Event) {
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
