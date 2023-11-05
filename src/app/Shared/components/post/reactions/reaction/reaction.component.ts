import { Component, Input } from '@angular/core';
import { IReaction } from 'src/app/Models/IPost';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-reaction',
  templateUrl: './reaction.component.html',
  styleUrls: ['./reaction.component.css']
})
export class ReactionComponent {
  @Input() reaction: IReaction | null = null
  apiUrl = environment.serverUrl;

}
