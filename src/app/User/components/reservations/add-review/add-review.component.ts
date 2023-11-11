import { Component, Input } from '@angular/core';
import { UserReservation } from 'src/app/Models/Reservation';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent {
  @Input()Reservation!:UserReservation;

}
