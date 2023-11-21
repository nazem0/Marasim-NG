import { Component, Input, OnInit } from '@angular/core';
import { IComment } from 'src/app/Models/IPost';
import { PaginationViewModel } from 'src/app/Models/PaginationViewModel';
import { AuthService } from 'src/app/Services/Auth.service';
import { PostService } from 'src/app/Services/Post.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  newComment = false;
  pageIndex = 1;
  pageSize = 5;
  @Input() postId!: number;
  commentsCount: number | null = null;
  comments: PaginationViewModel<IComment> = {
    data: [],
    count: 0,
    length: 0,
    pageIndex: 0,
    pageSize: 0,
    lastPage: 0
  };

  constructor(private postService: PostService, public AuthService: AuthService) {
  }
  ngOnInit(): void {
    this.getCommentsCount();
  }


  getData() {
    console.log("clicked");
    this.postService.GetCommentsByPostId(this.postId, this.pageIndex, this.pageSize).subscribe(
      {
        next: (result) => {
          this.comments.count = result.count
          this.comments.lastPage = result.lastPage;
          this.comments.pageIndex = result.pageIndex;
          this.comments.pageSize = result.pageSize;
          result.data.forEach(comment => {
            if (!!this.comments.data.find(c => c.id == comment.id)) return;
            this.comments.data.push(comment)
          })
          if (result.data.length == this.pageSize) {
            this.pageIndex++;
          }
        },
        error: error => console.log(error)
      })
  }

  getLastComment() {
    this.newComment = !this.newComment
    if (this.newComment && this.comments.data.length == this.comments.count)
      this.postService.GetCommentsByPostId(this.postId, this.pageIndex, this.pageSize).subscribe(
        {
          next: (result) => {
            this.getCommentsCount();
            this.comments.count = result.count
            this.comments.lastPage = result.lastPage;
            this.comments.pageIndex = result.pageIndex;
            this.comments.pageSize = result.pageSize;
            result.data.forEach(comment => {
              if (!!this.comments.data.find(c => c.id == comment.id)) return;
              this.comments.data.push(comment)
            })
            if (result.data.length == this.pageSize) {
              this.pageIndex++;
            }
            this.newComment = !this.newComment;
          },
          error: error => console.log(error)
        })
  }

  getCommentsCount() {
    this.postService.GetCommentsCountByPostId(this.postId).subscribe({
      next: commentsCount => {
        this.commentsCount = commentsCount
      }
    })
  }
}
