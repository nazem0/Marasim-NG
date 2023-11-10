import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'src/app/Models/IUser';
import { VendorReservation } from 'src/app/Models/Reservation';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-reservation-item',
  templateUrl: './reservation-item.component.html',
  styleUrls: ['./reservation-item.component.css']
})
export class ReservationItemComponent implements OnInit {
  
  @Input() Reservations: VendorReservation[] = [];
  @Input() activeTab: string = 'all';
  selectedCustomer: IUser | null = null; 
  apiUrl=environment.serverUrl;



  ngOnInit() {}
  

  openCustomerModal(User: IUser ) {
    this.selectedCustomer = User;
  }
}
