import { Component, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { IReaction } from 'src/app/Models/IPost';
import { AuthService } from 'src/app/Services/Auth.service';
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
  reactsCount: number | null = null;
  Reactions: IReaction[] = [];

  constructor
    (private PostService: PostService,
      private CookieService: CookieService,
      public AuthService: AuthService) {
    this.data = new FormData();
  }
  ngOnInit() {
    this.currentUserId = this.CookieService.get("Id");
    this.CheckLiked();
    this.GetReactsCount();
  }
  GetReactsCount(){
    this.PostService.GetReactsCountByPostId(this.postId).subscribe({
      next:reactsCount=>this.reactsCount=reactsCount
    })
  }
  GetLikes() {
    console.log("clicked");
    this.PostService.GetReactsByPostId(this.postId)
      .subscribe({
        next: (data) => {
          this.Reactions = data;
        },
        error: (error) => {
          console.log(error);
        }
      })
  }
  CheckLiked(){
    this.PostService.IsLiked(this.postId)
    .subscribe((result) => {
      if (result == false) {
        this.isLiked = false
      }
      else {
        this.isLiked = true
      }
    })
  }
  Like() {
    this.data.set('PostId', this.postId.toString());

    this.PostService.AddReact(this.data)
      .subscribe({
        next: () => {
          console.log("Liked");
          this.GetReactsCount();
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
        next: () => {
          console.log("Disliked");
          this.GetReactsCount();
          this.isLiked = false;
        },
        error: (error) => {
          console.log(error);
        }
      })
  }
  

}
