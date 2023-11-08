import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'src/app/Models/IUser';
import { VendorReservation } from 'src/app/Models/Reservation';

@Component({
  selector: 'app-reservation-item',
  templateUrl: './reservation-item.component.html',
  styleUrls: ['./reservation-item.component.css']
})
export class ReservationItemComponent implements OnInit {
  @Input() Reservations: VendorReservation[] = [];
  @Input() activeTab: string = 'all';
  selectedCustomer: IUser | null = null; 


  ngOnInit() {
    
  }

  openCustomerModal(User: IUser ) {
    this.selectedCustomer = User;
  }
}
