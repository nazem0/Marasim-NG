import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.css']
})
export class AttachmentsComponent {
  @Input() postTitle!:string;
  @Input() attachments!: { id: number, postId: number, attachmentUrl: string }[]
}
