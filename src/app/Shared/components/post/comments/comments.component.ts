import { Component, Input } from '@angular/core';
import { IComment } from 'src/app/Models/IPost';
import { PostService } from 'src/app/Services/Post.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  @Input() postID!:number;
  comments: IComment[]=[]
  
  constructor(private post:PostService) {
  }

  ngOnInit(){
    this.post.GetCommentsByPostId(this.postID).subscribe((result)=>this.comments=result)
  }
}
