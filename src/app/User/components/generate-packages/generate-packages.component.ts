import { CityService } from './../../../Services/city.service';
import { GovernorateService } from './../../../Services/governorate.service';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { City } from 'src/app/Models/City';
import { Governorate } from 'src/app/Models/governorate';

@Component({
  selector: 'app-generate-packages',
  templateUrl: './generate-packages.component.html',
  styleUrls: ['./generate-packages.component.css']
})
export class GeneratePackagesComponent implements AfterViewInit {
  @ViewChild("gov") gov: ElementRef | null = null;
  form: FormGroup;
  data: FormData;
  cities: City[] = [];
  govs: Governorate[] = [];
  budget : number = 0;
  constructor(
    private fb: FormBuilder,
    private GovernorateService: GovernorateService,
    private CityService: CityService
  ) {
    this.GovernorateService.get().subscribe((resp) => this.govs = resp);
    this.data = new FormData();
    this.form = this.fb.group({
      Budget: [null, [Validators.required]],
      Categories: [null, [Validators.required]],
      GovId: [null],
      CityId: [null],
      Rate: [null]
    })
  }
  ngAfterViewInit(): void {
    this.gov?.nativeElement.addEventListener('change', (e: any) => {
      this.CityService.getByGovId(this.gov?.nativeElement.value).subscribe((resp) => this.cities = resp)
    });
  }
}