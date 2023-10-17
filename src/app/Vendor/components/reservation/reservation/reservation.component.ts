import { Component, OnInit, Output } from '@angular/core';
import { VendorReservation } from '../models/vendorReservation';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  
  @Output() activeTab: string = 'all';
  search :string = '';
  reservations: VendorReservation[] = [
    {
        customerName: 'برعي متولي',
        requestDate: '2023-09-26',
        serviceType: 'حجز قاعة اللؤلؤة',
        acceptanceDate: '2023-10-01',
        status: 'pending',
        customerPic:'assets/img/groom.png'
    },
    {
        customerName: ' محسن',
        requestDate: '2023-09-26',
        serviceType: 'حجز قاعة اللؤلؤة',
        acceptanceDate: '2023-10-01',
        status: 'rejected',
        customerPic:'assets/img/groom.png'

    },
    {
        customerName: 'برعي ',
        requestDate: '2023-09-26',
        serviceType: 'حجز قاعة اللؤلؤة',
        acceptanceDate: '2023-10-01',
        status: 'accepted',
        customerPic:'assets/img/groom.png'

    },
  ];
 filteredReservations: VendorReservation[] = [];

  constructor() { }

  ngOnInit() {
    this.filterReservations(this.activeTab);      
  }

  filterReservations(tab: string) {
      this.activeTab = tab;
      this.filteredReservations = this.reservations.filter(item => item.status == tab || tab=='all');
  }
}


