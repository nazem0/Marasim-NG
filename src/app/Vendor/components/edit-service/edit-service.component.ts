import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent {
  editServiceForm: FormGroup;
  formIsValid = false;

  constructor(private formBuilder: FormBuilder) {
    this.editServiceForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      price: [null, [Validators.required]],
      location: [''],
      media: [null, [Validators.required]],
      description: [''],
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