import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {

  postForm: FormGroup;
  formIsValid = false;


  constructor(private formBuilder: FormBuilder) {
    this.postForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.pattern(/^[\p{L}]{3,30}$/u)]], 
      description: [''],
      attachments: [null],
    });
    this.postForm.statusChanges.subscribe(() => {
      this.formIsValid = this.postForm.valid;
    });
  }


  submitPost() {
    if (this.postForm.valid) {
      const formData = this.postForm.value;
      console.log(formData);
    }
  }
}