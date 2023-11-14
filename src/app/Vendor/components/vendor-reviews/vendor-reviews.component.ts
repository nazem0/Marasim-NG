import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { PaginationInstance } from 'ngx-pagination';
import { ReviewList } from 'src/app/Models/IReview';
import { ReviewService } from 'src/app/Services/Review.service';

@Component({
  selector: 'app-vendor-reviews',
  templateUrl: './vendor-reviews.component.html',
  styleUrls: ['./vendor-reviews.component.css']
})
export class VendorReviewsComponent implements OnInit {
  avgRate: number | null = null;
  reviews: ReviewList | null = null;
  p: number | undefined = undefined;
  public config: PaginationInstance = {
    id: 'paginationConfig',
    itemsPerPage: 3,
    currentPage: 1,
  };

  constructor(
    private ReviewService: ReviewService,
    private CookieService: CookieService,
    private ActivatedRoute: ActivatedRoute,
    private Router: Router
  ) { }


  ngOnInit() {
    this.ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.config.currentPage = parseInt(params.get('page')!);
        this.getData();
      },
    });
  }

  getData() {
    const vendorId = parseInt(this.CookieService.get('VendorId'));

    this.ReviewService.GetAverageRate(vendorId)
      .subscribe({
        next: (response) => {
          this.avgRate = response;
        },
        error: (error) => {
          console.log(error);
        }
      })

    this.ReviewService.GetPagedReviewsByVendorId(vendorId, this.config.currentPage, this.config.itemsPerPage)
      .subscribe({
        next: (response) => {
          console.log(response)
          this.reviews = response;
          this.config.currentPage = response.pageIndex;
          this.config.totalItems = response.count;
          this.config.itemsPerPage = response.pageSize;
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

  pageChange(newPage: number) {
    this.Router.navigate(['../', newPage], { relativeTo: this.ActivatedRoute })
    this.getData();
  }

}
