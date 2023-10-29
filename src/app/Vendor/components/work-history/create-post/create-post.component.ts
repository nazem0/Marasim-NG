import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/Services/Post.service';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  @ViewChild("UploadedPictures") UploadedPictures: ElementRef | null = null;
  postForm: FormGroup;
  formIsValid = false;
  data: FormData;


  constructor(private formBuilder: FormBuilder, private PostService: PostService) {
    this.data = new FormData();
    this.postForm = this.formBuilder.group({
      Title: ['', [Validators.required, Validators.pattern(/^[\p{L} ]{5,30}$/u)]], 
      Description: [''],
      Pictures: [null],
    });

    this.postForm.statusChanges.subscribe(() => {
      this.formIsValid = this.postForm.valid;
    });
  }


  submitPost() {
    if (this.postForm.valid) {
      this.data.append('Title', this.postForm.get('Title')?.value);
      this.data.append('Description', this.postForm.get('Description')?.value);
      for (var i = 0; i < this.UploadedPictures?.nativeElement.files.length; i++) {
        this.data.append('Pictures', this.UploadedPictures?.nativeElement.files[i]);
      }
      this.PostService.AddPost(this.data)
        .subscribe((response) => console.log(response));
    }
  }
}