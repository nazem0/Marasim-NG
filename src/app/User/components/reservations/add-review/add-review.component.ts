import { ToastrService } from 'ngx-toastr';
import { ReviewService } from 'src/app/Services/Review.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserReservation } from 'src/app/Models/Reservation';
import { environment } from 'src/environments/environment.development';
import { UserService } from 'src/app/Services/User.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent {
  @Output() refresh = new EventEmitter();
  @Input() Reservation!: UserReservation;
  apiUrl = environment.serverUrl;
  form: FormGroup;
  data: FormData;
  constructor(
    public UserService: UserService,
    private builder: FormBuilder,
    private ReviewService: ReviewService,
    private Toastr: ToastrService
  ) {
    this.data = new FormData();
    this.form = this.builder.group({
      rate: [null, [Validators.required]],
      message: [null, [Validators.maxLength(1000)]]
    })
  }
  addReview() {
    if (this.form.valid) {
      this.data.set('serviceId', this.Reservation.serviceId.toString());
      this.data.set('rate', this.form.get('rate')?.value);
      this.data.set('message', this.form.get('message')?.value);
      this.data.set('reservationId', this.Reservation.id.toString());
      this.ReviewService.Add(this.data).subscribe({
        next: () => {
          this.Toastr.success("تم تسجيل التقييم");
          this.refresh.emit();
        },
        error: (error) => {
          this.Toastr.error("برجاء التأكد من البيانات والمحاولة مرة أخرى", "حدث خطأ");
          console.log(error);
        }
      })
    }
  }

}
