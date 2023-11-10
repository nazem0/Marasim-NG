import { ReservationService } from './../../../Services/Reservation.service';
import { PaymentService } from './../../../Services/Payment.service';
import { Payment } from 'src/app/Models/Payment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit{
  constructor(
    private PaymentService:PaymentService,
    private ReservationService:ReservationService
    ){}
  Payments : Payment[] =[];
  ngOnInit(): void {
    this.PaymentService.Get().subscribe(
      {
        next:(response)=>this.Payments=response,
        error:(error)=>console.log(error)
      }
    )
  }
  Confirm(){

  }

}
