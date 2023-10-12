import { Component, OnInit } from '@angular/core';
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
  vendorWithDetails: IVendorWithDetails | undefined ;

  constructor(private vendor: VendorService, private user: UserService) {
    
  }

  ngOnInit() {
    this.vendor.getVendorWithUser(1, 3).subscribe(responseList => {
      this.currentVendor = responseList[0];
      this.vendorWithDetails!.vendorDetails = responseList[0];
      this.vendorWithDetails!.userDetails = responseList[1];
      console.log(this.vendorWithDetails)
  });


    // console.log("test")
    // this.vendor.getByID(2).subscribe({
    //   next: (result: IVendor) => {
    //     // this.currentVendor = result;
    //     console.log("Vendor added: " +result)

    //     this.vendorWithDetails!.vendorDetails = result;

    //   }
    // })
    // this.user.getByID(4).subscribe({
    //   next: (result: IUser) => {
    //     // this.currentUserVendor = result;
    //     console.log("User added: " +result)

    //     this.vendorWithDetails!.userDetails = result;
    //   }
    // })
          
    // console.log("Vendor with details: " +this.vendorWithDetails)
  }







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

  scrollToTargetAdjusted(x: string) {
    var elementPosition = document.getElementById(x)!.getBoundingClientRect().top;
    var offsetPosition: number = (elementPosition) + (window.scrollY - 80);
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
}
