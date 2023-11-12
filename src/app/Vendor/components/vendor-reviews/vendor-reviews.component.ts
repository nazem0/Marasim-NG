import { Component, Input, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { IReview } from 'src/app/Models/IReview';
import { ReviewService } from 'src/app/Services/Review.service';

@Component({
  selector: 'app-vendor-reviews',
  templateUrl: './vendor-reviews.component.html',
  styleUrls: ['./vendor-reviews.component.css']
})
export class VendorReviewsComponent implements OnInit {
  reviews: IReview[] | null = null;

  constructor(private ReviewService: ReviewService, private CookieService: CookieService) { }

  ngOnInit() {
    this.ReviewService.GetByVendorId(parseInt(this.CookieService.get("VendorId")))
      .subscribe({
        next: (response) => {
          console.log(response)
          this.reviews = response;
        },
        error: (error) => {
          console.log(error);
        }
      });
  }



  // Interface needed
  // Each Review has (      User       - Date - Rate - Service - Description )
  //                    ( Name - Pic )                 

  // reviews: IReview[] = [
  //   {
  //     User: { Name: 'عبد السميع اللميع', PicURL: 'https://booking.webestica.com/assets/images/avatar/04.jpg' },
  //     Date: new Date("2023-10-06").toLocaleDateString(),
  //     Rate: 4,
  //     Service: 'تصوير افراح',
  //     Description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى. هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى.'
  //   },
  //   {
  //     User: { Name: 'اللميع', PicURL: 'https://booking.webestica.com/assets/images/avatar/04.jpg' },
  //     Date: new Date("2023-10-07").toLocaleString(),
  //     Rate: 2,
  //     Service: 'تصوير ',
  //     Description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى. هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى.'
  //   },
  // ];

}
