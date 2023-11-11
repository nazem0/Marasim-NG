import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PostService } from 'src/app/Services/Post.service';
@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent {
  @Input() postID!: number;
  @Output() refresh = new EventEmitter();
  commentForm: FormGroup;
  formIsValid = false;
  data: FormData;

  constructor(private FormBuilder: FormBuilder, private PostService: PostService,private Toastr:ToastrService) {
    this.data = new FormData();
    this.commentForm = this.FormBuilder.group({
      postID: this.postID,
      Text: [null, [Validators.required]],
    });

    this.commentForm.statusChanges.subscribe(() => {
      this.formIsValid = this.commentForm.valid;
    });
  }

  addComment() {
    if (this.formIsValid) {
      this.data.append('Text', this.commentForm.get('Text')?.value);
      this.data.append('PostId', this.postID.toString());

      this.PostService.AddComment(this.data)
        .subscribe({
          next: (data) => {
            // this.Toastr.success("تم إضافة التعليق")
            console.log(data);
            this.refresh.emit()
          },
          error: (error) => {
            console.log(error);
          }
        });
    }
    this.commentForm.reset();
    this.data = new FormData();
  }
}
