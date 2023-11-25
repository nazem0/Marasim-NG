import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IUser } from 'src/app/Models/IUser';
import { IServiceMinInfo } from 'src/app/Models/IService';
import { VendorReservation } from 'src/app/Models/Reservation';
import { environment } from 'src/environments/environment.development';
import { ReservationService } from 'src/app/Services/Reservation.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/Services/User.service';
import { PaginationViewModel } from 'src/app/Models/PaginationViewModel';


@Component({
  selector: 'app-reservation-item',
  templateUrl: './reservation-item.component.html',
  styleUrls: ['./reservation-item.component.css'],
})
export class ReservationItemComponent implements OnChanges ,OnInit  {
  Reservations: PaginationViewModel<VendorReservation> | null = null;
  @Input() activeTab: string = 'p';
  selectedVendor: IServiceMinInfo | null = null;
  selectedCustomer: IUser | null = null;
  apiUrl = environment.serverUrl;
  currentPage =1
  pageSize =5
  totalItems ?:number
  constructor(
    public UserService: UserService,
    private reservationService: ReservationService,
    private toastr: ToastrService,
    private ReservationService: ReservationService) { }
  ngOnInit(): void {
    this.getReservations();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.currentPage=1
    this.getReservations();
    console.log(changes);
  }


  openCustomerModal(User: IUser) {
    this.selectedCustomer = User;
  }
  pageChange(event:any){
    this.currentPage=event
    this.getReservations();
  }

  getReservations() {
    this.ReservationService.GetForVendorByStatus(this.activeTab,this.currentPage,this.pageSize).subscribe({
      next: (response) => {
        this.Reservations = response;
        this.totalItems = response.count;
        console.log(this.Reservations);
      },
      error: (error) => {
        console.error('Error fetching reservations:', error);
      }
    });
  }

  acceptReservation(reservation: VendorReservation) {
    const data = {
      id: reservation.id,
      vendorId: reservation.service.vendorId,
    };
    this.reservationService.Accept(data).subscribe({
      next: () => {
        this.toastr.success('تم قبول الخدمة ');
        this.getReservations();
      },
      error: (error) => {
        this.toastr.error("برجاء المحاولة مرة أخرى", "حدث خطأ");
        console.log('Error accepting reservation:', error);
      },
    });
  }

  rejectReservation(reserveration: VendorReservation) {
    const data = {
      id: reserveration.id,
      vendorId: reserveration.service.vendorId,
    };
    this.reservationService.Reject(data).subscribe({
      next: () => {
        this.toastr.success('تم رفض الخدمة');
        this.getReservations();
      },
      error: (error) => {
        this.toastr.error("برجاء المحاولة مرة أخرى", "حدث خطأ");
        console.log('Error Reject reservation:', error);
      },
    });
  }


}
