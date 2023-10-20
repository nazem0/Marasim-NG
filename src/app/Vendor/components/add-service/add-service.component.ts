import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent {
  serviceForm: FormGroup;
  formIsValid = false;

  constructor(private formBuilder: FormBuilder) {
    this.serviceForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      price: [null, [Validators.required]],
      location: [''],
      media: [null, [Validators.required]],
      description: [''],
    });

    this.serviceForm.statusChanges.subscribe(() => {
      this.formIsValid = this.serviceForm.valid;
    });
  }

  submitService() {
    if (this.formIsValid) {
      const formData = this.serviceForm.value;
      console.log(formData);
    }
  }
}