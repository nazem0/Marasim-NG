import { Component, Input, OnInit } from '@angular/core';
import { IAttachment } from 'src/app/Models/IPost';
import { PostService } from 'src/app/Services/Post.service';

@Component({
  selector: 'app-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.css']
})
export class AttachmentsComponent {
  @Input() postID!: number;
  @Input() postAttachments!: IAttachment[];


}
