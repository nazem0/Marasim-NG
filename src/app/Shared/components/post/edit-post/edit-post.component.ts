import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IPost } from 'src/app/Models/IPost';
import { PostService } from 'src/app/Services/Post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent {
  @Input() post: IPost | null = null;
  @Output() refresh = new EventEmitter();
  editPostForm: FormGroup;
  data: FormData;
  formIsValid = false;

  constructor(private formBuilder: FormBuilder, private PostService: PostService,private Toastr:ToastrService) {
    this.data = new FormData();
    this.editPostForm = this.formBuilder.group({
      Title: [this.post?.title, [Validators.minLength(5), Validators.maxLength(1000)]],
      // media: [null],
      Description: [this.post?.description, [Validators.minLength(10), Validators.maxLength(1000)]],
    });

    this.editPostForm.statusChanges.subscribe(() => {
      this.formIsValid = this.editPostForm.valid;
    });
  }

  updatePost() {
    if (this.formIsValid) {
      if (this.editPostForm.get('Title')?.value) {
        this.data.set('Title', this.editPostForm.get('Title')?.value);
      }

      if (this.editPostForm.get('Description')?.value) {
        this.data.set('Description', this.editPostForm.get('Description')?.value);
      }

      console.log(this.editPostForm.value);

      this.PostService.Update(this.data, this.post?.id!)
        .subscribe({
          next: (data) => {
            this.Toastr.success("تم التعديل بنجاح")
            this.refresh.emit();
            this.editPostForm.reset();
            this.data = new FormData();
          },
          error: (error) => {
            this.Toastr.error("فشل التعديل, حاول مرة آخرى")
            console.log(error);
          }
        })
    }
  }
}
