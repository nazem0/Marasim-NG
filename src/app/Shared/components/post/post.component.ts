import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { IPost } from 'src/app/Models/IPost';
import { PostService } from 'src/app/Services/Post.service';
import { UserService } from 'src/app/Services/User.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  constructor(
    public UserService: UserService,
    private CookieService: CookieService,
    private PostService: PostService,
    private Toastr: ToastrService,
    public activatedRoute:ActivatedRoute) { }
  isVendor: boolean = this.CookieService.get('Role').includes('vendor');
  @Output() refresh = new EventEmitter();
  @Input() post: IPost | null = null;
  apiUrl = environment.serverUrl;
  loggedInVendorId = this.CookieService.get('VendorId')
  deletePost() {
    this.PostService.Delete(this.post?.id!)
      .subscribe({
        next: (data) => {
          this.Toastr.success("تم حذف المنشور بنجاح")
          this.refresh.emit();
        },
        error: (error) => {
          this.Toastr.error("حدث خطأ ، حاول مرة أخرى")
        }
      })
  }

}
