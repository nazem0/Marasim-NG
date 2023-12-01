import { Component, Input, OnInit } from '@angular/core';
import { IPostAttachment } from 'src/app/Models/IPost';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.css']
})
export class AttachmentsComponent {
  apiUrl=environment.serverUrl;

  @Input() postId!: number;
  @Input() postTitle!: string;
  @Input() vendorId!: number;
  @Input() vendorUserId!: string;
  @Input() postAttachments!: IPostAttachment[];
}
