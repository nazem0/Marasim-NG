import { Component, Input, OnInit } from '@angular/core';
import { IAttachment } from 'src/app/Models/IPost';
import { PostService } from 'src/app/Services/Post.service';

@Component({
  selector: 'app-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.css']
})
export class AttachmentsComponent implements OnInit {
  @Input() postTitle!: string;
  @Input() postID!: number;
  attachments: IAttachment[]  = []

  constructor(private PostService: PostService) {

  }

  ngOnInit() {
    this.PostService.GetAttachments(this.postID).subscribe((result) => 
    this.attachments = result)
  }
}
