import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IService } from 'src/app/Models/IService';
import { ServiceService } from 'src/app/Services/service.service';


@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent {
  @Input() service: IService | null = null;
  @Output() refresh = new EventEmitter();
  editServiceForm: FormGroup;
  data: FormData;
  formIsValid = false;

  constructor(private formBuilder: FormBuilder, private ServiceService: ServiceService) {
    this.data = new FormData();
    this.editServiceForm = this.formBuilder.group({
      Title: [this.service?.title, [Validators.minLength(3), Validators.maxLength(50)]],
      Price: [this.service?.price],
      // media: [null],
      Description: [this.service?.description, [Validators.minLength(20), Validators.maxLength(1000)]],
    });

    this.editServiceForm.statusChanges.subscribe(() => {
      this.formIsValid = this.editServiceForm.valid;
    });
  }

  submitEditedService() {
    if (this.formIsValid) {


    }
  }

  updateService() {
    if (this.formIsValid) {
      if (this.editServiceForm.get('Title')?.value) {
        this.data.set('Title', this.editServiceForm.get('Title')?.value);
      }
      if (this.editServiceForm.get('Price')?.value) {
        this.data.set('Price', this.editServiceForm.get('Price')?.value);
      }

      if (this.editServiceForm.get('Description')?.value) {
        this.data.set('Description', this.editServiceForm.get('Description')?.value);
      }
      console.log(this.editServiceForm.value);
      this.ServiceService.UpdateService(this.data, this.service?.id!)
        .subscribe({
          next: (data) => { this.refresh.emit() },
          error: (error) => {
            console.log(error);
          }
        })
    }
  }
}