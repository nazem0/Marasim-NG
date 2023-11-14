import { CityService } from 'src/app/Services/city.service';
import { CategoryService } from 'src/app/Services/Category.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScrollRevealService } from 'src/app/Services/Scroll-reveal.service';
import { RegisterService } from 'src/app/Services/Register.service';
import { Router } from '@angular/router';
import { CategoryName } from 'src/app/Models/CategoryName';
import { ToastrService } from 'ngx-toastr';
import { City } from 'src/app/Models/City';
import { Governorate } from 'src/app/Models/governorate';
import { GovernorateService } from 'src/app/Services/governorate.service';
@Component({
  selector: 'app-vendor-register',
  templateUrl: './vendor-register.component.html',
  styleUrls: ['./vendor-register.component.css'],
})
export class VendorRegisterationComponent implements OnInit, AfterViewInit {
  @ViewChild('UploadPic') UploadPic: ElementRef | null = null;
  cities: City[] = [];
  govs:Governorate[] = [];
  PicName: string = '';
  registerForm: FormGroup;
  data: FormData;
  Categories: CategoryName[] | null = null;
  PasswordRegEx = (/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/);
  PhoneNumberRegEx = (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}/);
  @ViewChild("gov") gov: ElementRef | null = null;
  constructor(
    private ScrollReveal: ScrollRevealService,
    private builder: FormBuilder,
    private RegisterService: RegisterService,
    private Router: Router,
    private CategoryService: CategoryService,
    private Toastr: ToastrService,
    private GovernorateService : GovernorateService,
    private CityService: CityService
  ) {
    this.data = new FormData();
    this.registerForm = this.builder.group({
      Name: [null, [Validators.required, Validators.minLength(2)]],
      Email: [null, [Validators.required, Validators.email]],
      Password: [null, [Validators.required,Validators.pattern(this.PasswordRegEx)]],
      ConfirmPassword: [null, [Validators.required]],
      PhoneNumber: [null, [Validators.required, Validators.minLength(11),Validators.pattern(this.PhoneNumberRegEx)]],
      NationalID: [null, [Validators.required, Validators.minLength(14)]],
      Gender: [null, [Validators.required]],
      Picture: [null, [Validators.required]],
      // Latitude: [null],
      // Longitude: [null],
      Summary: [null, [Validators.required, Validators.minLength(20), Validators.maxLength(1000)]],
      Street: [null],
      CityId: [null, [Validators.required]],
      GovernorateId: [null, [Validators.required]],
      District: [null, [Validators.required]],
      CategoryId: [null, [Validators.required]],
    });
  }

  ngOnInit() {
    this.CategoryService.GetNames().subscribe((response) => this.Categories = response);
    this.GovernorateService.get().subscribe((resp)=>this.govs = resp);
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
    this.gov?.nativeElement.addEventListener('change', (e: any) => {
      this.CityService.getByGovId(this.gov?.nativeElement.value).subscribe((resp)=>this.cities=resp)
    });
  }
  register() {

    if (this.registerForm.valid) {
      this.setData();
      this.RegisterService.registerVendor(this.data).subscribe({
        next: (response) => {
          this.Toastr.success("تم التسجيل بنجاح")
          console.log(response);
          this.data.forEach((v) => console.log(v));
          this.Router.navigate(["/login"]);
        },
        error: (error) => {
          this.Toastr.error("حدث خطأ ، راجع بياناتك وحاول مرة أخرى")
          console.log("object");
          this.data.forEach((v) => console.log(v));
          console.log(error);
        }
      });
    }
  }


    setData() {
      this.data.set('Name', this.registerForm.get('Name')?.value);
      this.data.set('CategoryId', this.registerForm.get('CategoryId')?.value);
      this.data.set('Email', this.registerForm.get('Email')?.value);
      this.data.set('Password', this.registerForm.get('Password')?.value);
      this.data.set('ConfirmPassword', this.registerForm.get('ConfirmPassword')?.value);
      this.data.set('PhoneNumber', this.registerForm.get('PhoneNumber')?.value);
      this.data.set('NationalID', this.registerForm.get('NationalID')?.value);
      this.data.set('Gender', this.registerForm.get('Gender')?.value);
      this.data.set('Picture', this.UploadPic?.nativeElement.files[0]);
      // this.data.set('Latitude', this.registerForm.get('Latitude')?.value);
      // this.data.set('Longitude', this.registerForm.get('Longitude')?.value);
      this.data.set('Summary', this.registerForm.get('Summary')?.value);
      this.data.set('Street', this.registerForm.get('Street')?.value);
      this.data.set('CityId', this.registerForm.get('CityId')?.value);
      this.data.set('GovernorateId', this.registerForm.get('GovernorateId')?.value);
      this.data.set('District', this.registerForm.get('District')?.value);
    }

  status: string = "التالي";

  swap(): void {
    const p1 = document.getElementById('page1');
    const p2 = document.getElementById('page2');
    const nxt = document.getElementById('next');
    const prev = document.getElementById('perv');

    if (p2 && p2.style.display === "none") {
      if (p1) p1.style.display = "none";
      if (p2) p2.style.display = "block";
      this.status = "السابق";
    } else {
      if (p1) p1.style.display = "block";
      if (p2) p2.style.display = "none";
      this.status = "التالي";
    }

    if (nxt && nxt.style.display === "none") {
      if (prev) prev.style.display = "none";
      if (nxt) nxt.style.display = "block";
    } else {
      if (prev) prev.style.display = "block";
      if (nxt) nxt.style.display = "none";
    }
  }

}
