import { Component,Input } from '@angular/core';
import { IPost } from 'src/app/Models/IPost';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post!:IPost;
}
