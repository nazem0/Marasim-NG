import { Component, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { IReaction } from 'src/app/Models/IPost';
import { PostService } from 'src/app/Services/Post.service';

@Component({
  selector: 'app-reactions',
  templateUrl: './reactions.component.html',
  styleUrls: ['./reactions.component.css']
})
export class ReactionsComponent {
  data: FormData;
  currentUserId: string = '';
  isLiked: boolean | undefined;
  @Input() postId!: number;
  Reactions!: IReaction[];
  constructor(private PostService: PostService, private CookieService: CookieService) {
    this.data = new FormData();
  }
  ngOnInit() {
    this.currentUserId = this.CookieService.get("Id");
    console.log(this.currentUserId);
    this.GetLikes();
    this.PostService.IsLiked(this.postId)
      .subscribe((result) => {
        this.isLiked = result;
        console.log(this.isLiked);
      })
  }

  GetLikes() {
    this.PostService.GetReactsByPostId(this.postId).subscribe((result) => this.Reactions = result);
  }

  Like() {
    this.data.set('PostId', this.postId.toString());

    this.PostService.AddReact(this.postId)
      .subscribe({
        next: (data) => {
          console.log("Liked");
          this.GetLikes();
        },
        error: (error) => {
          console.log(error);
        }
      })
    this.isLiked = true;
  }

  DisLike() {
    this.PostService.DeleteReact(this.postId)
      .subscribe({
        next: (data) => {
          console.log("Dislikde");
          this.GetLikes();
        },
        error: (error) => {
          console.log(error);
        }
      })
    this.isLiked = false;
  }
}
