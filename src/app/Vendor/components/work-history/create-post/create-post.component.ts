import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/Services/Post.service';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  @Output() refresh = new EventEmitter();
  @ViewChild("UploadedPictures") UploadedPictures: ElementRef | null = null;
  postForm: FormGroup;
  formIsValid = false;
  data: FormData;


  constructor(private formBuilder: FormBuilder, private PostService: PostService) {
    this.data = new FormData();
    this.postForm = this.formBuilder.group({
      Title: ['', [Validators.required, Validators.pattern(/^[\p{L} ]{5,30}$/u)]],
      Description: ['',[Validators.required,Validators.minLength(10), Validators.maxLength(1000)]],
      Pictures: [null, [Validators.required]],
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
      this.PostService.Add(this.data)
        .subscribe({
          next: (data) => {
            console.log("Post Added");
            this.refresh.emit();
            this.postForm.reset();
            this.data = new FormData();
          },
          error: (error) => {
            console.log(error);
          }
        })
    }
  }
}