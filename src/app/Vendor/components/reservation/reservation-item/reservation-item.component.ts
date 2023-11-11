import { ReservationComponent } from './../reservation/reservation.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from 'src/app/Models/IUser';
import { IServiceMinInfo } from 'src/app/Models/IService';
import { VendorReservation } from 'src/app/Models/Reservation';
import { environment } from 'src/environments/environment.development';
import { ReservationService } from 'src/app/Services/Reservation.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-reservation-item',
  templateUrl: './reservation-item.component.html',
  styleUrls: ['./reservation-item.component.css'],
})
export class ReservationItemComponent implements OnInit {
  @Output() refresh = new EventEmitter();
  @Input() Reservations: VendorReservation[] = [];
  @Input() activeTab: string = 'all';
  @Input() selectedVendor: IServiceMinInfo | null = null;
  selectedCustomer: IUser | null = null;
  apiUrl = environment.serverUrl;
  constructor(private reservationService: ReservationService,private toastr: ToastrService,) {}

  ngOnInit() {}

  openCustomerModal(User: IUser) {
    this.selectedCustomer = User;
  }
  
  acceptReservation(reservation: VendorReservation) {
    const data = {
      id: reservation.id,
      vendorId: reservation.service.vendorId,
    };
    this.reservationService.Accept(data).subscribe({
      next: () => {
        this.toastr.success('تم قبول الخدمة ');
        this.refresh.emit();
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
        this.toastr.error('تم رفض الخدمة');
        this.refresh.emit();
      },
      error: (error) => {
        this.toastr.error("برجاء المحاولة مرة أخرى", "حدث خطأ");
        console.log('Error Reject reservation:', error);
      },
    });
  }

  
}
