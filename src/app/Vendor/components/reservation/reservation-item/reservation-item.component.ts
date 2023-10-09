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
  constructor() { }

  ngOnInit() {
  }

}
