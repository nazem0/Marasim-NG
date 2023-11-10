import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ReservationService } from './../../../Services/Reservation.service';
import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IService } from 'src/app/Models/IService';
import { ToastrService } from 'ngx-toastr';
import { OpenCageDataResponse } from 'src/app/Models/OpenCageDataResponse';

@Component({
  selector: 'app-request-service',
  templateUrl: './request-service.component.html',
  styleUrls: ['./request-service.component.css',

  ]
})
export class RequestServiceComponent implements OnInit, OnDestroy {
  @ViewChild('PacInput') PacInput: ElementRef | null = null;
  @ViewChild('Latitude') Latitude: ElementRef | null = null;
  @ViewChild('Longitude') Longitude: ElementRef | null = null;
  @Input() service: IService | null = null;
  requestServiceForm: FormGroup;
  data: FormData;
  head: HTMLHeadElement = document.querySelector('head')!;
  script = document.createElement('script');
  mapInit = document.createElement('script');
  constructor(
    private builder: FormBuilder,
    private ReservationService: ReservationService,
    private CookieService: CookieService,
    private Toastr: ToastrService,
    private HttpClient: HttpClient) {
    this.data = new FormData()
    this.requestServiceForm = this.builder.group({
      PromoCode: [null],
      DateTime: [null, [Validators.required]],
      Latitude: [null],
      Longitude: [null],
      Address: [""],
    })
  }
  ngOnInit(): void {
    this.addMapScripts();
  }
  ngOnDestroy(): void {
    this.removeMapScripts()
  }

  request() {
    this.requestServiceForm.get("Latitude")?.patchValue(this.Latitude?.nativeElement.value);
    this.requestServiceForm.get("Longitude")?.patchValue(this.Longitude?.nativeElement.value);
  
    if (this.PacInput && this.PacInput.nativeElement.value !== "" && this.PacInput.nativeElement.value !== null) {
      this.updateFormAndSubmit(this.PacInput.nativeElement.value);
    } else {
      this.decodeLatLng(this.Latitude?.nativeElement.value, this.Longitude?.nativeElement.value)
        .subscribe((response) => {
          let formattedResponse = response as OpenCageDataResponse;
          let formattedAddress = formattedResponse.results[0].formatted;
          if (formattedAddress.includes("unnamed road")) {
            this.updateFormAndSubmit(formattedAddress.replace("unnamed road", formattedResponse.results[0].components.state));
          } else {
            this.updateFormAndSubmit(formattedAddress);
          }
        });
    }
  }
  
  updateFormAndSubmit(address: string) {
    this.requestServiceForm.get("Address")?.patchValue(address);
    console.log(address);
  
    if (this.requestServiceForm.valid) {
      this.setData();
      this.ReservationService.Add(this.data).subscribe({
        next: () => this.Toastr.success("تم حجز الخدمة"),
        error: (error) => {
          this.Toastr.error("برجاء التأكد من التاريخ والمحاولة مرة أخرى", "حدث خطأ");
          console.log(error);
        }
      });
    }
  
    console.log(this.requestServiceForm.value);
  }
  
  setData() {
    this.data.set('Address', this.requestServiceForm.get('Address')?.value);
    this.data.set("UserId", this.CookieService.get("Id"));
    this.data.set("ServiceId", this.service!.id.toString())
    this.data.set("PromoCode", this.requestServiceForm.get("PromoCode")?.value)
    this.data.set("DateTime", this.requestServiceForm.get("DateTime")?.value)
    this.data.set('Latitude', this.requestServiceForm.get('Latitude')?.value);
    this.data.set('Longitude', this.requestServiceForm.get('Longitude')?.value);
  }
  
  addMapScripts() {
    this.script.src = 'assets/js/mapsJavaScriptAPI.js';
    this.mapInit.src = 'assets/js/mapInit.js';
    this.mapInit.type = 'text/javascript';
    this.head?.append(this.script, this.mapInit);
  }
  removeMapScripts() {
    const childNodes = this.head.childNodes;
    const numberOfNodesToRemove = Math.min(14, childNodes.length); // Ensure we don't go beyond the number of child nodes.

    for (let i = 0; i < numberOfNodesToRemove; i++) {
      this.head.removeChild(childNodes[childNodes.length - 1]); // Remove the last child node.
    }
  }
  decodeLatLng(lat: number, lng: number) {
    const apiKey = '03c48dae07364cabb7f121d8c1519492';
    return this.HttpClient.get(
      `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${apiKey}&language=native`
    );
  }
}