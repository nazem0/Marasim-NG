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
  attachments: IAttachment[] = []
  @Input() postID!: number;

  constructor(private post: PostService) {
    
  }

  ngOnInit(){
    this.post.getAttachments(this.postID).subscribe((result) => this.attachments = result)
  }
}
