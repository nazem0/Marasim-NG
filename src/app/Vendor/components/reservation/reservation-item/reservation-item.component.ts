import { ReservationComponent } from './../reservation/reservation.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from 'src/app/Models/IUser';
import { IServiceMinInfo } from 'src/app/Models/IService';
import { VendorReservation } from 'src/app/Models/Reservation';
import { environment } from 'src/environments/environment.development';
import { ReservationService } from 'src/app/Services/Reservation.service';

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
  constructor(private reservationService: ReservationService) {}

  ngOnInit() {}

  openCustomerModal(User: IUser) {
    this.selectedCustomer = User;
  }

  acceptReservation(reserveration: VendorReservation) {
    const data = {
      id: reserveration.id,
      vendorId: reserveration.service.vendorId,
    };
    console.log(reserveration.service.title);
    console.log(data);
    this.reservationService.Accept(data).subscribe({
      next: (response) => {
        this.refresh.emit();
        console.log('Reservation accepted successfully:', response);
      },
      error: (error) => {
        console.log('Error accepting reservation:', error);
      },
    });
  }

  rejectReservation(reserveration: VendorReservation) {
    const data = {
      id: reserveration.id,
      vendorId: reserveration.service.vendorId,
    };
    console.log(reserveration.service.title);
    console.log(data);
    this.reservationService.Reject(data).subscribe({
      next: (response) => {
        this.refresh.emit();
        console.log('Reservation Reject successfully:', response);
      },
      error: (error) => {
        console.log('Error Reject reservation:', error);
      },
    });
  }
}
