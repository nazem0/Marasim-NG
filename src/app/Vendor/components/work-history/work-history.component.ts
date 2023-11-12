import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { PostService } from 'src/app/Services/Post.service';
import { PostList } from 'src/app/Models/IPost';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.css'],
})
export class WorkHistoryComponent implements OnInit {
  posts: PostList | null = null;
  p: number | undefined = undefined;
  public config: PaginationInstance = {
    id: 'paginationConfig',
    itemsPerPage: 2,
    currentPage: 1,
  };

  constructor(
    private postService: PostService,
    private cookieService: CookieService,
    private activatedRoute: ActivatedRoute,
    private Router : Router
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe({
      next: (params) => {
        this.config.currentPage = parseInt(params.get('page')!);
        this.getData();
      },
    });
  }

  getData() {
    const vendorId = parseInt(this.cookieService.get('VendorId'));
    this.postService.GetByVendorId(vendorId, this.config.currentPage, this.config.itemsPerPage).subscribe((result) => {
      this.posts = result;
      this.config.currentPage = result.pageIndex;
      this.config.totalItems = result.count;
      this.config.itemsPerPage = result.pageSize;
    });
  }

  pageChange(newPage: number) {
    this.Router.navigate(['../',newPage],{relativeTo:this.activatedRoute})
    this.getData();
  }
}
