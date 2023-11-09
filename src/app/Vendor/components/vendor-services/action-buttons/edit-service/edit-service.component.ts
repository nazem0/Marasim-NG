import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IService } from 'src/app/Models/IService';


@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent {
  @Input() service: IService | null = null;
  editServiceForm: FormGroup;
  formIsValid = false;

  constructor(private formBuilder: FormBuilder) {
    this.editServiceForm = this.formBuilder.group({
      title: [this.service?.title],
      price: [this.service?.price],
      media: [null],
      description: [this.service?.description],
    });

    this.editServiceForm.statusChanges.subscribe(() => {
      this.formIsValid = this.editServiceForm.valid;
    });
  }

  submitEditedService() {
    if (this.formIsValid) {
      const formData = this.editServiceForm.value;
      console.log(formData);
    }
  }
}