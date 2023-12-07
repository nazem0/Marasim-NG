import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent {
  @Output() refresh = new EventEmitter();
  @ViewChild("UploadedPictures") UploadedPictures: ElementRef | null = null;
  serviceForm: FormGroup;
  formIsValid = false;
  data: FormData;
  constructor(private formBuilder: FormBuilder, private ServiceService: ServiceService) {
    this.data = new FormData();
    this.serviceForm = this.formBuilder.group({
      Title: [null, [Validators.required, Validators.maxLength(100)]],
      Price: [null, [Validators.required]],
      Pictures: [null, [Validators.required]],
      Description: [null, [Validators.required, Validators.maxLength(1000)]],
    });

    this.serviceForm.statusChanges.subscribe(() => {
      this.formIsValid = this.serviceForm.valid;
    });
  }

  submitService() {
    if (this.formIsValid) {
      this.data.set('Title', this.serviceForm.get('Title')?.value);
      this.data.set('Description', this.serviceForm.get('Description')?.value);
      this.data.set('Price', this.serviceForm.get('Price')?.value.toFixed());
      for (let i = 0; i < this.UploadedPictures?.nativeElement.files.length; i++) {
        this.data.append('Pictures', this.UploadedPictures?.nativeElement.files[i]);
      }
      this.ServiceService.AddService(this.data)
        .subscribe({
          next: (data) => {
            console.log("Service Added");
            this.refresh.emit();
            this.serviceForm.reset();
            this.data = new FormData();
          },
          error: (error) => {
            console.log(error);
          }
        });

    }
  }
}
