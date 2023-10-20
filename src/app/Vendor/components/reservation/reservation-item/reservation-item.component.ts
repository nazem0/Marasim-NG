import { Component, OnInit, Input } from '@angular/core';
import { VendorReservation } from '../../../../Models/vendorReservation';

@Component({
  selector: 'app-reservation-item',
  templateUrl: './reservation-item.component.html',
  styleUrls: ['./reservation-item.component.css']
})
export class ReservationItemComponent implements OnInit {
  @Input() reservation: VendorReservation[] = [] as VendorReservation[];
  @Input() activeTab: string = 'all';
  selectedCustomer: { name: string, telephone: string, address: string  ,img: string} | null = null; 

  constructor() { }

  ngOnInit() {
  }

  openCustomerModal(customer: VendorReservation ) {
    this.selectedCustomer = {
      img :customer?.customerPic || "لا توجد صورة ",
      name: customer.customerName,
      telephone: '0123123123', 
      address: 'كلابشة' 
    };
    
    
  }
}
