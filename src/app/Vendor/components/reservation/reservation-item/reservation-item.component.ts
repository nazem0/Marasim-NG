import { Component, OnInit, Input } from '@angular/core';
import { VendorReservation } from '../models/vendorReservation';

@Component({
  selector: 'app-reservation-item',
  templateUrl: './reservation-item.component.html',
  styleUrls: ['./reservation-item.component.css']
})
export class ReservationItemComponent implements OnInit {
  @Input() reservation: VendorReservation[] = [] as VendorReservation[];
  @Input() activeTab: string = 'all';
  selectedCustomer: { name: string, telephone: string, address: string } | null = null; 

  constructor() { }

  ngOnInit() {
  }

  openCustomerModal(customer: VendorReservation) {
    this.selectedCustomer = {
      name: customer.customerName,
      telephone: '123-456-7890', 
      address: '123 Main St, City' 
    };
  }
}
