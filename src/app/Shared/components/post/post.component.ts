import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { IPost } from 'src/app/Models/IPost';
import { PostService } from 'src/app/Services/Post.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  constructor(private CookieService: CookieService, private PostService: PostService) { }
  isVendor: boolean = this.CookieService.get('Role').includes('vendor');
  @Output() delete = new EventEmitter();
  @Input() post: IPost | null = null;
  apiUrl = environment.serverUrl;

  deletePost() {
    this.PostService.Delete(this.post?.id!)
    .subscribe({
      next: (data) => {
        console.log("Post Deleted");
        this.delete.emit();
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

}
