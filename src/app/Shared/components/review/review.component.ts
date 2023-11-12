import { Component, Input } from '@angular/core';
import { IReview } from 'src/app/Models/IReview';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
  apiUrl=environment.serverUrl;
  @Input() Review!: IReview;
}
