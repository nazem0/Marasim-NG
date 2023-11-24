import { ServiceService } from 'src/app/Services/service.service';
import { CookieService } from 'ngx-cookie-service';
import { ReservationService } from 'src/app/Services/Reservation.service';
import { Component, ElementRef, Input, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IService } from 'src/app/Models/IService';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Services/Auth.service';
import { City } from 'src/app/Models/City';
import { CityService } from 'src/app/Services/city.service';
import { Governorate } from 'src/app/Models/governorate';
import { GovernorateService } from 'src/app/Services/governorate.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-request-service',
  templateUrl: './request-service.component.html',
  styleUrls: ['./request-service.component.css',

  ]
})
export class RequestServiceComponent implements AfterViewInit {
  service: IService | null = null;
    @ViewChild("governorate") gov: ElementRef | null = null;
  requestServiceForm: FormGroup;
  today = new Date().toISOString().split('T')[0];
  data: FormData;
  cities: City[] = [];
  govs: Governorate[] = [];
  constructor(
    private builder: FormBuilder,
    private ReservationService: ReservationService,
    private CookieService: CookieService,
    private Toastr: ToastrService,
    public AuthService: AuthService,
    private CityService: CityService,
    private GovernorateService: GovernorateService,
    private Router: Router,
    private activatedRoute: ActivatedRoute,
    public serviceService: ServiceService
  ) {

    this.getServiceFromUrlParams();
    this.GovernorateService.get().subscribe((resp) => this.govs = resp);
    this.data = new FormData()
    this.requestServiceForm = this.builder.group({
      PromoCode: [null, [Validators.maxLength(10)]],
      DateTime: [null, [Validators.required]],
      CityId: [null, [Validators.required]],
      GovId: [null, [Validators.required]],
      District: [null, [Validators.required, Validators.maxLength(100)]],
      Street: [null, [Validators.maxLength(100)]]
    })
  }
  ngAfterViewInit(): void {
    console.log(document.querySelector("#govInput"));;
    this.gov?.nativeElement.addEventListener('change', (e: any) => {
      this.CityService.getByGovId(this.gov?.nativeElement.value).subscribe((resp) => this.cities = resp)
    });
  }
  request() {
    if (this.requestServiceForm.valid) {
      this.setData();
      this.ReservationService.Add(this.data).subscribe({
        next: () => {
          this.Toastr.success("تم حجز الخدمة")
          this.Router.navigate(["/reservation"])
        },
        error: (error) => {
          this.Toastr.error("برجاء التأكد من التاريخ والمحاولة مرة أخرى", "حدث خطأ");
          console.log(error);
        }
      });
    }
  }


  setData() {
    this.data.set('Address', this.requestServiceForm.get('Address')?.value);
    this.data.set("UserId", this.CookieService.get("Id"));
    this.data.set("ServiceId", this.service!.id.toString())
    this.data.set("PromoCode", this.requestServiceForm.get("PromoCode")?.value)
    this.data.set("DateTime", this.requestServiceForm.get("DateTime")?.value)
    this.data.set('CityId', this.requestServiceForm.get('CityId')?.value);
    this.data.set('GovId', this.requestServiceForm.get('GovId')?.value);
    this.data.set('District', this.requestServiceForm.get('District')?.value);
    this.data.set('Street', this.requestServiceForm.get('Street')?.value);
  }

  getServiceFromUrlParams() {
    this.activatedRoute.paramMap.subscribe(
      {
        next: params => {
          let serviceIdParam = params.get("serviceId");
          if (serviceIdParam) {
            let serviceId: number = parseInt(serviceIdParam);
            if (isNaN(serviceId)) {
              this.Router.navigate(["/404"]);
              return;
            }
            else
              this.getServiceByServiceId(parseInt(serviceIdParam))
          }
        }
      }
    )
  }
  getServiceByServiceId(serviceId: number) {
    this.serviceService.GetById(serviceId).subscribe({
      next:service=>{
        this.service=service
        console.log(service);
      }
    })
  }
}