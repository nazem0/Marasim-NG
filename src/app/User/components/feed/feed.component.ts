import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IAttachment, IPost } from 'src/app/Models/IPost';
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
        this.getAttachments();
        this.getReactions();
      }
    })

  }
  getReactions() {
    this.posts!.forEach(post => {
      this.post.getReacts(post.id).subscribe({
        next: (result) => {
          post.reactions = result;
          console.log(result);
        }
      })
    })
  }

  getAttachments() {
    this.posts!.forEach(post => {
      this.post.getAttachments(post.id).subscribe({
        next: (result) => {
          post.attachments = result;
          console.log(result);
        }
      })
    })
  }
}

