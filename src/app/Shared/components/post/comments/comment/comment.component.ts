import { Component, Input } from '@angular/core';
import { IComment } from 'src/app/Models/IPost';
import { UserService } from 'src/app/Services/User.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input() comment: IComment | null = null;
  apiUrl = environment.serverUrl;
  constructor(public UserService: UserService) { }
}
