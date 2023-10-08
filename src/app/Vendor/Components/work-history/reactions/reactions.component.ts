import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reactions',
  templateUrl: './reactions.component.html',
  styleUrls: ['./reactions.component.css']
})
export class ReactionsComponent {
  @Input() reactions!:{id: number, userId: number, postId: number, dateTime: string}[]
}
