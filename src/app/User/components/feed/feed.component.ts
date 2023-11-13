import { IPost } from 'src/app/Models/IPost';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FollowService } from 'src/app/Services/Follow.service';
import { IFollowPosts } from 'src/app/Models/IFollow';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, AfterViewInit {
  followPosts: IFollowPosts[] | null = null;
  @ViewChild("filterContainer") filterContainer!: ElementRef;
  @ViewChild("caret") caret!: ElementRef;

  constructor(private FollowService: FollowService) { }
  ngAfterViewInit(): void {
    console.log(this.filterContainer.nativeElement);
  }

  ngOnInit() {
    this.FollowService.GetPostsByFollow()
      .subscribe({
        next: (data) => {
          this.followPosts = data;
          console.log(data);
        },
        error: (error) => {
          console.log(error);
        }
      })
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
