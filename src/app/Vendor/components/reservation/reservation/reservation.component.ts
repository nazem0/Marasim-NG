import { Component, OnInit, Output } from '@angular/core';
import { VendorReservation } from 'src/app/Models/Reservation';
import { ReservationService } from 'src/app/Services/Reservation.service';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

 
  activeTab: string = 'all';
  search: string = '';
  Reservations: VendorReservation[] = [];
  filteredReservations: VendorReservation[] = [];

  constructor(private ReservationService:ReservationService) { }

  ngOnInit() {
    this.filterReservations(this.activeTab);
    this.getReservations();
  }

  filterReservations(tab: string) {
    this.activeTab = tab;
    this.filteredReservations = this.Reservations.filter(item => item.status == tab || tab == 'all');
  }
  getReservations(){
    this.ReservationService.GetAllForVendor().subscribe({
      next:(response)=>{
        this.Reservations=response
        console.log(this.Reservations);
      }
    })
  }
}
  



