import { Component,Input } from '@angular/core';
import { IPost } from 'src/app/Models/IPost';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post!:IPost;
  apiUrl=environment.serverUrl;

}
