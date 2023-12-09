import { CityService } from 'src/app/Services/city.service';
import { GovernorateService } from 'src/app/Services/governorate.service';
import { VendorService } from 'src/app/Services/Vendor.service';
import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { IVendorMidInfo } from 'src/app/Models/IVendor';
import { PaginationViewModel } from 'src/app/Models/PaginationViewModel';
import { CategoryService } from 'src/app/Services/Category.service';
import { Governorate } from 'src/app/Models/governorate';
import { City } from 'src/app/Models/City';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PaginationInstance } from 'ngx-pagination';
import { combineLatest } from 'rxjs';
import { CategoryName } from 'src/app/Models/ICategory';

@Component({
  selector: 'app-vendors-filter',
  templateUrl: './vendors-filter.component.html',
  styleUrls: ['./vendors-filter.component.css'],
})
export class VendorsFilterComponent implements AfterViewInit {
  starsArray = Array.from({ length: 5 }, (_, index) => index + 1);

  public config: PaginationInstance = {
    id: 'paginationConfig',
    itemsPerPage: 4,
    currentPage: 1,
  };
  @ViewChild('gov') gov: ElementRef | null = null;
  noResult = false;
  vendors: PaginationViewModel<IVendorMidInfo> | null = null;
  categories: CategoryName[] = [];
  categoriesInput: string[] = [];
  govs: Governorate[] = [];
  cities: City[] = [];
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
    this.form = this.formBuilder.group({
      categories: [],
      governorateId: [],
      cityId: [],
      name: [],
      district: [],
      rate: [],
    });
    this.categoryService.GetNames().subscribe({
      next: (categories) => (this.categories = categories),
    });
    this.governorateService.get().subscribe({
      next: (govs) => {
        (this.govs = govs)
        combineLatest([
          this.activatedRoute.paramMap,
          this.activatedRoute.queryParamMap])
          .subscribe(([paramsMap, queryParamsMap]) => {
            if (paramsMap)
              this.config.currentPage = parseInt(paramsMap?.get('pageIndex')!);
            if (queryParamsMap) {
              console.log("here");
              console.log(queryParamsMap.get('cityId'));
              let govId = queryParamsMap.get("governorateId")
              govId ? this.getCities(govId) : null;
              this.form.patchValue({
                name: queryParamsMap.get('name') || null,
                categories: queryParamsMap.get('categories') || null,
                governorateId: queryParamsMap.get('governorateId') || null,
                cityId: queryParamsMap.get('cityId') || null,
                district: queryParamsMap.get('district') || null,
                rate: queryParamsMap.get('rate') || null,
              })
            }
            this.getData(this.config.currentPage, queryParamsMap)
          });
      }
    });

  }
  ngAfterViewInit(): void {
    this.gov?.nativeElement.addEventListener('change', (e: Event) => {
      let elem = e.target as HTMLInputElement;
      let value = elem.value;
      if (value != '' && value != '0: null') {
        this.form.patchValue({ cityId: null })
        this.getCities(value);
      }
    });
  }

  filter() {
    const queryParams = this.form.value;
    this.router.navigate(['../1'], {
      queryParams: this.form.value,
      relativeTo: this.activatedRoute
    });
  }
  getData(pageIndex: number, params: ParamMap) {
    this.vendorService
      .filterVendors(
        pageIndex,
        this.config.itemsPerPage,
        params
      )
      .subscribe({
        next: (result) => {
          this.noResult = !result.count;
          this.vendors = result;
          this.vendors.length = result.count;
          this.config.currentPage = result.pageIndex;
          this.config.totalItems = result.count;
          this.config.itemsPerPage = result.pageSize;
        },
      });
  }
  onCategoryChange(categoryId: string, event: Event) {
    let category = event.target as HTMLInputElement;
    if (category.checked) {
      this.categoriesInput.push(categoryId);
    } else {
      this.categoriesInput.splice(this.categoriesInput.indexOf(categoryId), 1);
    }

    // update form control
    this.form.controls['categories'].setValue(this.categoriesInput);
  }
  pageChange(newPage: number) {
    this.router.navigate(['../', newPage], { relativeTo: this.activatedRoute, queryParamsHandling: 'merge' })
  }
  getCities(govId: string) {
    this.cityService.getByGovId(govId).subscribe((cities) => this.cities = cities);
  }
  clearFilter() {
    this.router.navigate(['../1'], {
      relativeTo: this.activatedRoute
    })
  }
}
