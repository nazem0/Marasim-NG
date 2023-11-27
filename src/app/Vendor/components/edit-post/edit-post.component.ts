import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IPost } from 'src/app/Models/IPost';
import { PostService } from 'src/app/Services/Post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent {
  post: IPost | null = null;
  editPostForm: FormGroup;
  data: FormData;
  formIsValid = false;

  constructor(
    private formBuilder: FormBuilder,
    private PostService: PostService,
    private Toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.paramMap.subscribe({
      next: params => {
        let postId = parseInt(params.get("postId")!);
        if (isNaN(postId))
          this.router.navigate(["404"]);
        else
          this.getPostById(postId);
      }
    })

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
  getPostById(postId: number) {
    this.PostService.getById(postId).subscribe({
      next:post=>this.post = post
    })
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
            this.router.navigate(["../../1"], { relativeTo: this.activatedRoute })
          },
          error: (error) => {
            this.Toastr.error("فشل التعديل, حاول مرة آخرى")
            console.log(error);
          }
        })
    }
  }
}
