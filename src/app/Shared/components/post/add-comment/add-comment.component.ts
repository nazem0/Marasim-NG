import { Component, Input } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PostService } from 'src/app/Services/Post.service';
@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent {
  @Input() postID!:number;
  commentForm: FormGroup;
  formIsValid = false;
  data: FormData;

  constructor(private FormBuilder: FormBuilder, private PostService: PostService) { 
    this.data = new FormData();
    this.commentForm = this.FormBuilder.group({
      postID: this.postID,
      Text: ['', [Validators.required]], 
    });

    this.commentForm.statusChanges.subscribe(() => {
      this.formIsValid = this.commentForm.valid;
    });
  }
  addComment() {if (this.commentForm.valid) {
    this.data.append('Text', this.commentForm.get('Text')?.value);
    this.data.append('PostId', this.postID.toString());
    
    this.PostService.AddComment(this.data)
      .subscribe((response) => console.log(response));
  }
}}
