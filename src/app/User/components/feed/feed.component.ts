import { Component } from '@angular/core';
import { IPost } from 'src/app/Models/IPost';
import { PostService } from 'src/app/Services/Post.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {
  posts: IPost[] | null = null;
  constructor(private post: PostService) {



    this.post.get().subscribe({
      next: (result: IPost[]) => {
        this.posts = result;
        console.log(this.posts);
      }
    })

  }
}

