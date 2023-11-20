import { Component, OnInit, Output } from '@angular/core';
import { PaginationViewModel } from 'src/app/Models/PaginationViewModel';
import { VendorReservation } from 'src/app/Models/Reservation';
import { ReservationService } from 'src/app/Services/Reservation.service';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  activeTab: string = 'p';
  search: string = '';
  Reservations: PaginationViewModel<VendorReservation> | null = null;
  constructor(private ReservationService:ReservationService) { }

  ngOnInit() {
  }
  filterReservations(tab: string) {
    this.activeTab = tab;
    this.getReservations();
  }

  getReservations(){
    this.ReservationService.GetForVendorByStatus(this.activeTab).subscribe({
      next:(response)=>{
        this.Reservations=response
        console.log(this.Reservations);
      },
      error: (error) => {
        console.error('Error fetching reservations:', error);
      }
    });
  }

}
  



