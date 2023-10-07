import { Component } from '@angular/core';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.css']
})
export class WorkHistoryComponent {
  posts = [
    {
      id: 1,
      // vendorID:1,
      // media: 'image1.png', 
      title: 'Post 1',
      description: 'Description for post 1',
      date: '2023-02-15T12:00:00Z',
      reactions: [
        {id: 1, userId: 1, postId: 1, value: 'like', dateTime: '2023-02-15T12:05:00Z'},
        {id: 2, userId: 2, postId: 1, value: 'like', dateTime: '2023-02-15T12:10:00Z'}
      ], 
      comments: [
        {id: 1, userId: 2, postId: 1, text: 'Comment 1', dateTime: '2023-02-15T12:15:00Z'},
        {id: 2, userId: 3, postId: 1, text: 'Comment 2', dateTime: '2023-02-15T12:20:00Z'}
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
        {id: 3, userId: 1, postId: 2, value: 'like', dateTime: '2023-02-16T09:35:00Z'}
      ],
      comments: [
        {id: 3, userId: 3, postId: 2, text: 'Comment 3', dateTime: '2023-02-16T09:40:00Z'}
      ],
      attachments: [
        {id: 3, postId: 2, attachmentUrl: 'https://images5.alphacoders.com/131/1318918.jpeg'}
      ]
    }
  ];
}
