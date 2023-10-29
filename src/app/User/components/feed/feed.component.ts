import { IPost } from 'src/app/Models/IPost';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PostService } from 'src/app/Services/Post.service';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit,AfterViewInit {
  posts: IPost[] | null = null;
  @ViewChild("filterContainer") filterContainer!: ElementRef;
  @ViewChild("caret") caret!: ElementRef;

  constructor(private postService: PostService) { }
  ngAfterViewInit(): void {
    console.log(this.filterContainer.nativeElement);
  }

  ngOnInit(): void {
    this.postService.Get().subscribe((result: IPost[]) => {
      this.posts = result;
      console.log(this.posts);
    });
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
