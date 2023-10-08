import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vendor-reviews',
  templateUrl: './vendor-reviews.component.html',
  styleUrls: ['./vendor-reviews.component.css']
})
export class VendorReviewsComponent {
  // Interface needed
  // Each Review has (      User       - Date - Rate - Service - Description )
  //                    ( Name - Pic )                 

  REVIEWS: any[] = [
    {
      User: { Name: 'عبد السميع اللميع', PicURL: 'https://booking.webestica.com/assets/images/avatar/04.jpg' },
      Date: new Date("2023-10-06"),
      Rate: 4,
      Service: 'تصوير افراح',
      Description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى. هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى.'
    },
    {
      User: { Name: 'اللميع', PicURL: 'https://booking.webestica.com/assets/images/avatar/04.jpg' },
      Date: new Date("2023-10-07"),
      Rate: 2,
      Service: 'تصوير ',
      Description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى. هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى.'
    },
  ];

  num_of_reviews: number = 777;


}
