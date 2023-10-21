import { Component } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent {
  comment = new FormControl(null,{validators:Validators.required})
  constructor(private FormBuilder: FormBuilder) { 
    
  }
  test() {
    console.log(this.comment.value);
  }
}
