import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-vendorside',
  templateUrl: './profile-vendorside.component.html',
  styleUrls: ['./profile-vendorside.component.css']
})
export class ProfileVendorsideComponent {
  Service = {
    ServiceID : 1,
    ServiceName: 'تصوير افراح',
    Price: 100.00,
    Rate: 4

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
        {id: 1, userId: 1, postId: 1, dateTime: '2023-02-15T12:05:00Z'},
        {id: 2, userId: 2, postId: 1, value: 'like', dateTime: '2023-02-15T12:10:00Z'}
      ], 
      comments: [
        {id: 1, userId: 2, postId: 1,text: 'Comment 1', dateTime: '2023-02-15T12:15:00Z'},
        {id: 2, userId: 3, postId: 1,text: 'Comment 2', dateTime: '2023-02-15T12:20:00Z'}
      ],
      attachments: [
        {id: 1, postId: 1, attachmentUrl: 'https://images7.alphacoders.com/398/398965.jpg'},
        {id: 2, postId: 1, attachmentUrl: 'https://images4.alphacoders.com/841/84136.jpg'}
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
        {id: 3, userId: 1, postId: 2, dateTime: '2023-02-16T09:35:00Z'}
      ],
      comments: [
        {id: 3, userId: 3, postId: 2, text: 'Comment 3', dateTime: '2023-02-16T09:40:00Z'}
      ],
      attachments: [
        {id: 3, postId: 2, attachmentUrl: 'https://images5.alphacoders.com/131/1318918.jpeg'}
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
