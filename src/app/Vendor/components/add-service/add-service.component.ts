import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/Services/service.service';


@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent {
  @ViewChild("UploadedPictures") UploadedPictures: ElementRef | null = null;
  serviceForm: FormGroup;
  formIsValid = false;
  data:FormData;
  constructor(private formBuilder: FormBuilder,private ServiceService:ServiceService) {
    this.data=new FormData();
    this.serviceForm = this.formBuilder.group({
      Title: [null, [Validators.required]],
      Price: [null, [Validators.required]],
      Pictures: [null, [Validators.required]],
      Description: [null,[Validators.required]],
    });

    this.serviceForm.statusChanges.subscribe(() => {
      this.formIsValid = this.serviceForm.valid;
    });
  }

  submitService() {
    if (this.formIsValid) {
      this.data.append('Title', this.serviceForm.get('Title')?.value);
      this.data.append('Description', this.serviceForm.get('Description')?.value);
      this.data.append('Price', this.serviceForm.get('Price')?.value);
      this.data.append('Pictures',this.UploadedPictures?.nativeElement.files);
      this.ServiceService.AddService(this.data)
      .subscribe((response)=>console.log(response));
    }
  }
}