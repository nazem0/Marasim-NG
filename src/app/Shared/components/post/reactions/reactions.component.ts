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
  isLiked: boolean = false;
  @Input() postId!: number;
  Reactions!: IReaction[];

  constructor(private PostService: PostService, private CookieService: CookieService) {
    this.data = new FormData();
  }

  ngOnInit() {
    this.currentUserId = this.CookieService.get("Id");
    console.log(this.currentUserId);
    console.log(this.postId);
    this.GetLikes();
  }

  GetLikes() {
    this.PostService.GetReactsByPostId(this.postId)
      .subscribe({
        next: (data) => {
          this.Reactions = data;
          this.PostService.IsLiked(this.postId)
            .subscribe((result) => {
              if (result == false) {
                this.isLiked = false
              }
              else {
                this.isLiked = true
              }
            })
        },
        error: (error) => {
          console.log(error);
        }
      })
  }

  Like() {
    this.data.set('PostId', this.postId.toString());

    this.PostService.AddReact(this.data)
      .subscribe({
        next: (data) => {
          console.log("Liked");
          this.GetLikes();
          this.isLiked = true;
          this.data = new FormData();
        },
        error: (error) => {
          console.log(error);
        }
      })

  }

  DisLike() {
    this.PostService.DeleteReact(this.postId)
      .subscribe({
        next: (data) => {
          console.log("Dislikde");
          this.GetLikes();
          this.isLiked = false;
        },
        error: (error) => {
          console.log(error);
        }
      })
  }

}
