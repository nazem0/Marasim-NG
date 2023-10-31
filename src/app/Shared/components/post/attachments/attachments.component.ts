import { Component, Input, OnInit } from '@angular/core';
import { IAttachment } from 'src/app/Models/IPost';
import { PostService } from 'src/app/Services/Post.service';
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
  @Input() postAttachments!: IAttachment[];
  

}
