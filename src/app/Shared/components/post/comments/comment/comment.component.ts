import { UserService } from 'src/app/Services/User.service';
import { Component, Input } from '@angular/core';
import { IComment } from 'src/app/Models/IPost';
import { IUser } from 'src/app/Models/IUser';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
@Input() comment:IComment|null = null;

constructor(){
}
}
