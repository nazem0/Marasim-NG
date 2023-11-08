import { Component, Input, OnInit } from '@angular/core';
import { IPostAttachment } from 'src/app/Models/IPost';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.css']
})
export class AttachmentsComponent {
  apiUrl=environment.serverUrl;

  @Input() postID!: number;
  @Input() postTitle!: string;
  @Input() vendorID!: string;
  @Input() postAttachments!: IPostAttachment[];
  

}
