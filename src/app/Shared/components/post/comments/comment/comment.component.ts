import { Component, Input } from '@angular/core';
import { IComment } from 'src/app/Models/IPost';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input() comment: IComment | null = null;
  apiUrl = environment.serverUrl;
}
