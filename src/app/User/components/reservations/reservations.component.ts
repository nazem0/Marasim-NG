import { ReviewService } from 'src/app/Services/Review.service';
import { CookieService } from 'ngx-cookie-service';
import { UserReservation } from 'src/app/Models/Reservation';
import { ReservationService } from './../../../Services/Reservation.service';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/Services/User.service';
import { PaginationViewModel } from 'src/app/Models/PaginationViewModel';

@Component({
  selector: 'app-pending',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent {
  activeTab: string = 'p';
  apiUrl = environment.serverUrl;
  Reservations: PaginationViewModel<UserReservation> | null = null;
  constructor(
    public UserService: UserService,
    private ReservationService: ReservationService,
    private CookieService: CookieService,
    private Toastr: ToastrService,
    private ReviewService: ReviewService
  ) { }
  ngOnInit() {
    this.getReservations();
  }
  setActiveTab(tab: string) {
    this.activeTab = tab;
    this.getReservations();
  }
  getReservations() {
    this.ReservationService.GetForUserByStatus(this.activeTab).subscribe({
      next: (response) => {
        this.Reservations = response
        console.log(this.Reservations);
      }
    })
  }
  markAsDone(Id: number) {
    this.ReservationService.Done({
      Id: Id,
      UserId: this.CookieService.get("Id")
    }).subscribe({
      next: () => {
        this.Toastr.success("تم");
        this.getReservations();
      },
      error: (error) => {
        this.Toastr.error("برجاء المحاولة مرة أخرى", "حدث خطأ");
        console.log(error);
      }
    });
  }
  HasReviews(ReservationId: number) {
    this.ReviewService.HasReviews(ReservationId).subscribe({
      next: (response) => {
        return response;
      }
    })
  }
}
