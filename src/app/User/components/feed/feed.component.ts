import { PostList } from 'src/app/Models/IPost';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PostService } from 'src/app/Services/Post.service';
import { PaginationInstance } from 'ngx-pagination';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, AfterViewInit {
  posts: PostList | null = null;
  p: number | undefined = undefined;
  public config: PaginationInstance = {
    id: 'paginationConfig',
    itemsPerPage: 2,
    currentPage: 1,
  };
  @ViewChild("filterContainer") filterContainer!: ElementRef;
  @ViewChild("caret") caret!: ElementRef;

  constructor(
    private PostService: PostService,
    private ActivatedRoute: ActivatedRoute,
    private CookieService: CookieService,
    private Router: Router
  ) { }

  ngAfterViewInit(): void {
    console.log(this.filterContainer.nativeElement);
    
  }

  ngOnInit() {
    this.ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.config.currentPage = parseInt(params.get('pageIndex')!);
        this.getData();
      },
    });
  }

  getData() {
    this.PostService.GetByPostsByFollow(this.config.currentPage, this.config.itemsPerPage)
    .subscribe((result) => {
      this.posts = result;
      this.config.currentPage = result.pageIndex;
      this.config.totalItems = result.count;
      this.config.itemsPerPage = result.pageSize;
    });
  }

  pageChange(newPage: number) {
    this.Router.navigate(['../',newPage],{relativeTo:this.ActivatedRoute})
    this.getData();
  }

  showFilter() {
    if (this.filterContainer.nativeElement.classList.contains('expanded')) {
      this.caret.nativeElement.classList.add('fa-caret-left')
      this.caret.nativeElement.classList.remove('fa-caret-right')
      this.filterContainer.nativeElement.classList.remove('expanded');
    } else {
      this.caret.nativeElement.classList.remove('fa-caret-left')
      this.caret.nativeElement.classList.add('fa-caret-right')
      this.filterContainer.nativeElement.classList.add('expanded');
    }
  }
}
