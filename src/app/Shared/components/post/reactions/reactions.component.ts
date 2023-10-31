import { Component, Input } from '@angular/core';
import { PostService } from 'src/app/Services/Post.service';

@Component({
  selector: 'app-reactions',
  templateUrl: './reactions.component.html',
  styleUrls: ['./reactions.component.css']
})
export class ReactionsComponent {
  isLiked: boolean = false
  @Input() postID!: number;
  reactions: { id: number, userId: number, postId: number, dateTime: string }[] = []
  @Input() userName!: string;
  constructor(private post: PostService) {

  }
  // ngOnInit(){
  //   this.post.GetReacts(this.postID).subscribe((result)=>this.reactions=result)
  // }
}
