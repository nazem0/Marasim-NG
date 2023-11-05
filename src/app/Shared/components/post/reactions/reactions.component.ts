import { Component, Input } from '@angular/core';
import { IReaction } from 'src/app/Models/IPost';
import { PostService } from 'src/app/Services/Post.service';

@Component({
  selector: 'app-reactions',
  templateUrl: './reactions.component.html',
  styleUrls: ['./reactions.component.css']
})
export class ReactionsComponent {
  isLiked: boolean | undefined;
  @Input() postID!: number;
  reactions: IReaction[] = []
  constructor(private PostService: PostService) {

  }
  ngOnInit() {
    this.PostService.IsLiked(this.postID).subscribe((result) => this.isLiked = result)
    this.PostService.GetReacts(this.postID).subscribe((result) => this.reactions = result)
  }
}
