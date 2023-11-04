import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/Models/IPost';
import { PostService } from 'src/app/Services/Post.service';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.css']
})
export class WorkHistoryComponent implements OnInit {
  posts: IPost[] | null = null;

  constructor(private PostService: PostService,private CookieService:CookieService) { }

  ngOnInit() {
    this.PostService.GetByVendorID(parseInt(this.CookieService.get("VendorId"))).subscribe(result => {
      console.log(result)
      this.posts = result;
    })

    this.PostService.Get().subscribe(result => {
      console.log(result)
      this.posts = result;
    })
  }

}
