import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScrollRevealService } from 'src/app/Services/Scroll-reveal.service';
import { RegisterService } from 'src/app/Services/Register.service';
import { OpenCageDataResponse } from 'src/app/Models/OpenCageDataResponse';
import { RegisterationErrorResponse } from 'src/app/Models/RegisterationErrorResponse';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vendor-register',
  templateUrl: './vendor-register.component.html',
  styleUrls: ['./vendor-register.component.css'],
})
export class VendorRegisterationComponent implements OnInit, AfterViewInit {
  @ViewChild('Latitude') Latitude: ElementRef | null = null;
  @ViewChild('Longitude') Longitude: ElementRef | null = null;
  @ViewChild('UploadPic') UploadPic: ElementRef | null = null;
  @ViewChild('PacInput') PacInput : ElementRef | null = null;
  PicName: string = '';
  registerForm: FormGroup;
  data: FormData;
  PasswordRegEx = (/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/);
  PhoneNumberRegEx = (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}/);
  address: string = "";
  ErrorResponse: RegisterationErrorResponse | null = null;
  constructor(
    private ScrollReveal: ScrollRevealService,
    private builder: FormBuilder,
    private RegisterService: RegisterService,
    private HttpClient: HttpClient,
    private Router: Router
  ) {
    this.data = new FormData();
    this.registerForm = this.builder.group({
      Name: [null, [Validators.required, Validators.minLength(2)]],
      Email: [null, [Validators.required, Validators.email]],
      Password: [null, [Validators.required, Validators.pattern(this.PasswordRegEx)]],
      ConfirmPassword: [null, [Validators.required]],
      PhoneNumber: [null, [Validators.required, Validators.minLength(11), Validators.pattern(this.PhoneNumberRegEx)]],
      NationalID: [null, [Validators.required, Validators.minLength(11)]],
      Gender: [null, [Validators.required]],
      Picture: [null, [Validators.required]],
      Latitude: [null],
      Longitude: [null],
      Address: [null],
      Summary: [null, [Validators.required, Validators.minLength(20), Validators.maxLength(1000)]]
    });
  }
  ngOnInit() {
    const sr = this.ScrollReveal.getScrollReveal();
    sr.reveal('.rightSide', {
      origin: 'right',
      duration: 1200,
      distance: '500px',
    });
    sr.reveal('.leftSide', {
      origin: 'left',
      duration: 1200,
      distance: '500px',
    });
  }

  ngAfterViewInit(): void {
    this.UploadPic?.nativeElement.addEventListener('change', (e: any) => {
      this.PicName = e.target?.files[0].name;
    });
    // Map

    let script = document.createElement('script');
    script.src = 'assets/js/mapsJavaScriptAPI.js';
    let mapInit = document.createElement('script');
    mapInit.src='assets/js/mapInit.js';
    mapInit.type = 'text/javascript';
    document.querySelector('head')?.append(script, mapInit);
  }

  async register() {
    let address = "";
    this.registerForm.get("Latitude")?.patchValue(this.Latitude?.nativeElement.value)
    this.registerForm.get("Longitude")?.patchValue(this.Longitude?.nativeElement.value)
    if(this.PacInput && this.PacInput.nativeElement.value != "")
    {
      address = this.PacInput.nativeElement.value;
      this.registerForm.get("Address")?.patchValue(address)
      console.log(address);
    }
    else{
      this.decodeLatLng(this.Latitude?.nativeElement.value, this.Longitude?.nativeElement.value).subscribe((response) => {
        let formattedResponse = response as OpenCageDataResponse
        let formattedAddress = formattedResponse.results[0].formatted
        if (formattedAddress.includes("unnamed road")) {
          address = formattedAddress.replace("unnamed road", formattedResponse.results[0].components.state);
          this.registerForm.get("Address")?.patchValue(address);
        }
        else {
          address = formattedAddress;
          this.registerForm.get("Address")?.patchValue(address)
        }
      });

    }
    if (this.registerForm.valid) {

      this.data.set('Address', this.registerForm.get('Address')?.value);
      this.data.set('Name', this.registerForm.get('Name')?.value);
      this.data.set('Email', this.registerForm.get('Email')?.value);
      this.data.set('Password', this.registerForm.get('Password')?.value);
      this.data.set(
        'ConfirmPassword',
        this.registerForm.get('ConfirmPassword')?.value
      );
      this.data.set(
        'PhoneNumber',
        this.registerForm.get('PhoneNumber')?.value
      );
      this.data.set('NationalID', this.registerForm.get('NationalID')?.value);
      this.data.set('Gender', this.registerForm.get('Gender')?.value);
      this.data.set('Picture', this.UploadPic?.nativeElement.files[0]);
      this.data.set('Latitude', this.registerForm.get('Latitude')?.value);
      this.data.set('Longitude', this.registerForm.get('Longitude')?.value);
      this.data.set('Summary', this.registerForm.get('Summary')?.value);
      this.RegisterService.registerVendor(this.data).subscribe({
        next: (response) => {
          console.log(response)
          this.data.forEach(v => console.log(v))
          this.Router.navigate(["/login"]);
        },
        error: (error) => {
          console.log("object");
          this.data.forEach(v => console.log(v))
          console.log(error);
        }
      })
    }
  }






  decodeLatLng(lat: number, lng: number) {
    const apiKey = '03c48dae07364cabb7f121d8c1519492';
    return this.HttpClient.get(
      `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${apiKey}&language=native`
    );
  }
}
