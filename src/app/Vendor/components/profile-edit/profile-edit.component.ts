import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/Models/ICategory';
import { IUser } from 'src/app/Models/IUser';
import { CategoryService } from 'src/app/Services/Category.service';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/Services/User.service';
import { IVendor } from 'src/app/Models/IVendor';
import { VendorService } from 'src/app/Services/Vendor.service';
import { RegisterationErrorResponse } from 'src/app/Models/RegisterationErrorResponse';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  Categories: ICategory[] | null = null;
  User: IUser | null = null;
  Vendor: IVendor | null = null;

  @ViewChild("UploadPic") UploadPic: ElementRef | null = null;
  PicName: string = "";

  updateForm: FormGroup;
  data: FormData;
  PasswordRegEx = (/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/);
  PhoneNumberRegEx = (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}/);
  ErrorResponse: RegisterationErrorResponse | null = null;


  constructor(private CategoryService: CategoryService,
    private UserService: UserService,
    private CookieService: CookieService,
    private VendorService: VendorService,
    private builder: FormBuilder,) {
    this.data = new FormData();
    this.updateForm = this.builder.group({
      Name: [this.User?.name, Validators.minLength(2)],
      Picture: [null],
      PhoneNumber: [this.User?.phoneNumber, [Validators.minLength(11), Validators.pattern(this.PhoneNumberRegEx)]],
      CategoryId: [null],
      Summary: [this.Vendor?.summary, [Validators.minLength(20), Validators.maxLength(1000)]],
    })
  }

  ngAfterViewInit(): void {
    this.UploadPic?.nativeElement.addEventListener('change', (e: any) => {
      this.PicName = e.target?.files[0].name;
    });
  }

  ngOnInit() {
    this.CategoryService.GetAll()
      .subscribe((result) => this.Categories = result);

    this.UserService.getById(this.CookieService.get("Id"))
      .subscribe((result) => this.User = result);

    this.VendorService.GetVendorByUserId(this.CookieService.get("Id"))
      .subscribe((result) => this.Vendor = result);
  }


  updateData() {
    if (this.updateForm.valid) {
      if (this.updateForm.get('Name')?.value) {
        this.data.set('Name', this.updateForm.get('Name')?.value);
      }
      if (this.updateForm.get('PhoneNumber')?.value) {
        this.data.set('PhoneNumber', this.updateForm.get('PhoneNumber')?.value);
      }

      if (this.updateForm.get('CategoryId')?.value) {
        this.data.set('CategoryId', this.updateForm.get('CategoryId')?.value);
      }

      if (this.updateForm.get('Summary')?.value) {
        this.data.set('Summary', this.updateForm.get('Summary')?.value);
      }

      if (this.UploadPic?.nativeElement.files[0]) {
        this.data.set('Picture', this.UploadPic?.nativeElement.files[0]);
      }

      this.VendorService.UpdateVendor(this.data)
        .subscribe({
          next: (data) => {
            console.log("Vendor Updated")
            this.ngOnInit();
            this.updateForm.reset();
            this.data = new FormData();
          },
          error: (error) => {
            console.log(error);
          }
        });

    }
  }


}
