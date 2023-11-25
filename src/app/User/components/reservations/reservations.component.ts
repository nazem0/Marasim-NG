import { ReviewService } from 'src/app/Services/Review.service';
import { CookieService } from 'ngx-cookie-service';
import { UserReservation } from 'src/app/Models/Reservation';
import { ReservationService } from './../../../Services/Reservation.service';
import { Component, OnInit} from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/Services/User.service';
import { PaginationViewModel } from 'src/app/Models/PaginationViewModel';
import { PaginationInstance } from 'ngx-pagination';


@Component({
  selector: 'app-pending',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements  OnInit {
  Reservations: PaginationViewModel<UserReservation> | null = null;
  apiUrl = environment.serverUrl;
  activeTab: string = 'p';
  maxPageIndex :number = 0 ;

  public config: PaginationInstance = {
    id: 'paginationConfig',
    itemsPerPage:5 ,
    currentPage: 1 ,
  };

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
    this.config.currentPage=1
    this.getReservations();
  }
  pageChange(event:any){
    this.config.currentPage=event
    this.getReservations();
  }

  getReservations() {
    this.ReservationService.GetForUserByStatus(this.activeTab,this.config.currentPage,this.config.itemsPerPage).subscribe({
      next: (response) => {
        this.Reservations = response
        this.config.currentPage=response.pageIndex
        this.config.itemsPerPage=response.pageSize
        this.config.totalItems=response.count

        // Calculate maxPageIndex
        this.maxPageIndex = Math.ceil(response.count / response.pageSize);
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
