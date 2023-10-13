import { Component, OnInit } from '@angular/core';
import { IService } from 'src/app/Models/IService';
import { IUser } from 'src/app/Models/IUser';
import { IVendor } from 'src/app/Models/IVendor';
import { IVendorWithDetails } from 'src/app/Models/IVendorWithDetails';
import { UserService } from 'src/app/Services/User.service';
import { VendorService } from 'src/app/Services/Vendor.service';

@Component({
  selector: 'app-vendor-profile',
  templateUrl: './vendor-profile.component.html',
  styleUrls: ['./vendor-profile.component.css']
})
export class VendorProfileComponent implements OnInit {
  currentUserVendor: IUser | null = null;
  currentVendor: IVendor | null = null;
  currentServices: IService[]| null = null;
  vendorWithDetails: IVendorWithDetails | undefined;





  constructor(private vendor: VendorService, private user: UserService) { }

  ngOnInit() {
    this.vendor.getVendorWithUser(1, 3).subscribe(responseList => {
      this.currentVendor = responseList[0];
      this.currentUserVendor = responseList[1];
    });
    this.vendor.getServicesWithAttachments(1).subscribe(result => {
      this.currentServices = result;
    })
  }
  scrollToTargetAdjusted(x: string) {
    var elementPosition = document.getElementById(x)!.getBoundingClientRect().top;
    var offsetPosition: number = (elementPosition) + (window.scrollY - 80);
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }



  REVIEWS: any[] = [
    {
      User: { Name: 'عبد السميع اللميع', PicURL: 'https://booking.webestica.com/assets/images/avatar/05.jpg' },
      Date: new Date("2023-10-06").toLocaleDateString(),
      Rate: 4,
      Service: 'تصوير افراح',
      Description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى. هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى.'
    },
    {
      User: { Name: 'اللميع', PicURL: 'https://booking.webestica.com/assets/images/avatar/04.jpg' },
      Date: new Date("2023-10-07").toLocaleString(),
      Rate: 2,
      Service: 'تصوير ',
      Description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى. هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى.'
    },
  ];


  //replace by array of post by service id
  posts = [
    {
      id: 1,
      // vendorID:1,
      // media: 'image1.png', 
      title: 'Post 1',
      description: 'Description for post 1',
      date: '2023-02-15T12:00:00Z',
      reactions: [
        { id: 1, userId: 1, postId: 1, dateTime: '2023-02-15T12:05:00Z' },
        { id: 2, userId: 2, postId: 1, value: 'like', dateTime: '2023-02-15T12:10:00Z' }
      ],
      comments: [
        { id: 1, userId: 2, postId: 1, text: 'Comment 1', dateTime: '2023-02-15T12:15:00Z' },
        { id: 2, userId: 3, postId: 1, text: 'Comment 2', dateTime: '2023-02-15T12:20:00Z' }
      ],
      attachments: [
        { id: 1, postId: 1, attachmentUrl: 'https://images7.alphacoders.com/398/398965.jpg' },
        { id: 2, postId: 1, attachmentUrl: 'https://images4.alphacoders.com/841/84136.jpg' }
      ]
    }
    ,
    {
      id: 2,
      // vendorID:1,
      // media: 'image2.png',
      title: 'Post 2',
      description: 'Description for post 2',
      date: '2023-02-16T09:30:00Z',
      reactions: [
        { id: 3, userId: 1, postId: 2, dateTime: '2023-02-16T09:35:00Z' }
      ],
      comments: [
        { id: 3, userId: 3, postId: 2, text: 'Comment 3', dateTime: '2023-02-16T09:40:00Z' }
      ],
      attachments: [
        { id: 3, postId: 2, attachmentUrl: 'https://images5.alphacoders.com/131/1318918.jpeg' }
      ]
    }
  ];


}
