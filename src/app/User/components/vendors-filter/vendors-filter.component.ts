import { CityService } from 'src/app/Services/city.service';
import { GovernorateService } from 'src/app/Services/governorate.service';
import { VendorService } from 'src/app/Services/Vendor.service';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { IVendorMidInfo } from 'src/app/Models/IVendor';
import { PaginationViewModel } from 'src/app/Models/PaginationViewModel';
import { CategoryName } from 'src/app/Models/CategoryName';
import { CategoryService } from 'src/app/Services/Category.service';
import { Governorate } from 'src/app/Models/governorate';
import { City } from 'src/app/Models/City';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { PaginationInstance } from 'ngx-pagination';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-vendors-filter',
  templateUrl: './vendors-filter.component.html',
  styleUrls: ['./vendors-filter.component.css'],
})
export class VendorsFilterComponent implements AfterViewInit {
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
    combineLatest([
      this.activatedRoute.paramMap,
      this.activatedRoute.queryParamMap])
      .subscribe(([paramsMap, queryParamsMap]) => {
        if (paramsMap)
          this.config.currentPage = parseInt(paramsMap?.get('pageIndex')!);
        if (queryParamsMap) {
          this.getQueryParams(queryParamsMap);
        }

        this.getData(this.config.currentPage, queryParamsMap)
      });

    this.form = this.formBuilder.group({
      PageSize: [this.config.itemsPerPage],
      Categories: [this.categoriesInput],
      GovernorateId: [this.governorateId],
      CityId: [this.cityId],
      Name: [this.name],
      District: [this.district],
      Rate: [this.rate],
    });
    this.categoryService.GetNames().subscribe({
      next: (categories) => (this.categories = categories),
    });
    this.governorateService.get().subscribe({
      next: (govs) => (this.govs = govs),
    });
  }
  ngAfterViewInit(): void {
    this.gov?.nativeElement.addEventListener('change', () => {
      this.form.get('CityId')?.setValue(null);

      if (
        this.gov?.nativeElement.value != '' &&
        this.gov?.nativeElement.value != '0: null'
      )
        this.cityService
          .getByGovId(this.gov?.nativeElement.value)
          .subscribe((resp) => (this.cities = resp));
    });
  }

  filter() {
    this.router.navigate(['../1'], {
      queryParams: {
        name:
          this.form.get('Name')?.value == ''
            ? null
            : this.form.get('Name')?.value,
        categories:
          this.form.get('Categories')?.value.join() == ''
            ? null
            : this.form.get('Categories')?.value.join(),
        governorateId:
          this.form.get('GovernorateId')?.value == ''
            ? null
            : this.form.get('GovernorateId')?.value,
        cityId:
          this.form.get('CityId')?.value == ''
            ? null
            : this.form.get('CityId')?.value,
        district:
          this.form.get('District')?.value == ''
            ? null
            : this.form.get('District')?.value,
      },
      relativeTo:this.activatedRoute
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
    this.form.controls['Categories'].setValue(this.categoriesInput);
  }
  pageChange(newPage: number) {
    this.router.navigate(['../', newPage], { relativeTo: this.activatedRoute, queryParamsHandling: 'merge' })
  }
  getQueryParams(queryParamsMap:ParamMap){
    let categoriesParam = queryParamsMap.get('categories')?.split(',');
          let governorateIdParam = queryParamsMap.get('governorateId');
          let cityIdParam = queryParamsMap.get('cityId');
          let nameParam = queryParamsMap.get('name');
          let districtParam = queryParamsMap.get('district');
          let rateParam = queryParamsMap.get('rate');
          if (categoriesParam && categoriesParam.length > 0)
            this.categoriesInput = categoriesParam;
          if (governorateIdParam) {
            this.governorateId = governorateIdParam;
            this.cityService
              .getByGovId(this.governorateId)
              .subscribe((resp) => (this.cities = resp));
          }
          if (cityIdParam) this.cityId = cityIdParam;
          if (nameParam) this.name = nameParam;
          if (districtParam) this.district = districtParam;
          if (rateParam) this.rate = rateParam;
  }
}
