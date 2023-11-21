import { Component, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { IReaction } from 'src/app/Models/IPost';
import { PaginationViewModel } from 'src/app/Models/PaginationViewModel';
import { AuthService } from 'src/app/Services/Auth.service';
import { PostService } from 'src/app/Services/Post.service';

@Component({
  selector: 'app-reactions',
  templateUrl: './reactions.component.html',
  styleUrls: ['./reactions.component.css']
})
export class ReactionsComponent {
  newReact=false;
  pageIndex = 1;
  pageSize=1;
  data: FormData;
  currentUserId: string = '';
  isLiked: boolean = false;
  @Input() postId!: number;
  reactsCount: number | null = null;
  reacts: PaginationViewModel<IReaction> = {
    data: [],
    count: 0,
    length: 0,
    pageIndex: 0,
    pageSize: 0,
    lastPage: 0
  };

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
  GetReactsCount() {
    this.PostService.GetReactsCountByPostId(this.postId).subscribe({
      next: reactsCount => this.reactsCount = reactsCount
    })
  }
  getData() {
    this.PostService.GetReactsByPostId(this.postId, this.pageIndex,this.pageSize)
      .subscribe({
        next: (result) => {
          this.reacts.count = result.count
          this.reacts.lastPage = result.lastPage;
          this.reacts.pageIndex = result.pageIndex;
          this.reacts.pageSize = result.pageSize;
          result.data.forEach(react => {
            if (!!this.reacts.data.find(c => c.id == react.id)) return;
            this.reacts.data.push(react)
          })
          if (result.data.length == this.pageSize) {
            this.pageIndex++;
          }
        },
        error: error => console.log(error)
      })
  }

  addLastReact() {
    this.newReact = !this.newReact
    if (this.newReact && this.reacts.data.length == this.reacts.count)
      this.PostService.GetReactsByPostId(this.postId, this.pageIndex, this.pageSize).subscribe(
        {
          next: (result) => {
            this.GetReactsCount();
            this.reacts.count = result.count
            this.reacts.lastPage = result.lastPage;
            this.reacts.pageIndex = result.pageIndex;
            this.reacts.pageSize = result.pageSize;
            result.data.forEach(react => {
              if (!!this.reacts.data.find(c => c.id == react.id)) return;
              this.reacts.data.push(react)
            })
            if (result.data.length == this.pageSize) {
              this.pageIndex++;
            }
            this.newReact = !this.newReact;
          },
          error: error => console.log(error)
        })
  }
  
  CheckLiked() {
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
          this.addLastReact();
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
