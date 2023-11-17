import { UserService } from './../../../Services/User.service';
import { Component, ElementRef, ViewChild, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IUser } from 'src/app/Models/IUser';

@Component({
  selector: 'app-user-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class UserEditProfileComponent {
  @ViewChild("UploadPic") UploadPic: ElementRef | null = null;
  @Input() User: IUser | null = null;
  basicInfoForm: FormGroup;
  data: FormData;
  PhoneNumberRegEx = (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}/);
  constructor(
    private formBuilder: FormBuilder,
    private UserService: UserService,
    private Toastr: ToastrService
  ) {
    this.data = new FormData();
    this.basicInfoForm = this.formBuilder.group({
      Name: [null, [Validators.minLength(3), Validators.maxLength(50)]],
      PhoneNumber: [
        null,
        [
          Validators.pattern(this.PhoneNumberRegEx)
        ]
      ],
      Picture: [null] // If handling picture upload separately
    });

  };
  basicInfoFormSubmit() {
    let Name: string | null = this.basicInfoForm.get("Name")?.value;
    let PhoneNumber: string | null = this.basicInfoForm.get("PhoneNumber")?.value;
    if (Name != null)
      this.data.set("Name", this.basicInfoForm.get("Name")?.value);

    if (PhoneNumber != null)
      this.data.set("PhoneNumber", this.basicInfoForm.get("PhoneNumber")?.value);

    this.data.set("Picture", this.UploadPic?.nativeElement.files[0]);
    this.UserService.UpdateVendor(this.data).subscribe({
      next: () => {
        this.Toastr.success("تم تعديل بياناتك بنجاح")
      },
      error: (error) => {
        this.Toastr.error("برجاءالمحاولة مرة أخرى", "حدث خطأ");
        console.log(error);
      }
    })
  }

}
