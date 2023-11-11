import { ReservationComponent } from './../reservation/reservation.component';
import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'src/app/Models/IUser';
import { IServiceMinInfo } from 'src/app/Models/IService';
import { VendorReservation } from 'src/app/Models/Reservation';
import { environment } from 'src/environments/environment.development';
import { ReservationService } from 'src/app/Services/Reservation.service';
import { data } from 'jquery';


@Component({
  selector: 'app-reservation-item',
  templateUrl: './reservation-item.component.html',
  styleUrls: ['./reservation-item.component.css']
})
export class ReservationItemComponent implements OnInit {

  @Input() Reservations: VendorReservation[] = [];
  @Input() activeTab: string = 'all';
  @Input() selectedVendor :IServiceMinInfo | null = null;
  selectedCustomer: IUser | null = null;
  apiUrl = environment.serverUrl;
  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
    
   }

  openCustomerModal(User: IUser) {
    this.selectedCustomer = User;
  }

  acceptReservation(reserveration: VendorReservation) {
    
    const data = {
      id: reserveration.id,
      vendorId: reserveration.service.vendorId
    }
    console.log(reserveration.service.title);
    console.log(data,"s");
    this.reservationService.AcceptReservation(data).subscribe({
      next:(response)=>{
        console.log('Reservation accepted successfully:', response);
      },
      error:(error)=>{
        console.log('Error accepting reservation:', error);
      }
    });
  }
}

  // acceptReservation(reservationId: number ,vendorId :number) {
  //   const vendorId: number = this.re
  //   this.ReservationService.AcceptReservation({ id: reservationId, vendorId: String })
  //     .subscribe(
  //       response => {
  //         console.log('Reservation accepted successfully:', response);
  //         // You may want to update the UI or take other actions on success
  //       },
  //       error => {
  //         console.error('Error accepting reservation:', error);
  //         // Handle error, if needed
  //       }
  //     );      
  // }

  // accseptReservation(reservationId: number ) {

  //   };
  //   this.ReservationService.AcceptReservation(Data).subscribe({
  //     next: (response) => {
  //       console.log('Reservation accepted successfully:', response);
  //     },
  //     error: (error) => {
  //       console.error('Error accepting reservation:', error);
  //     }
  //   });
  // }

