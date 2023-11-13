import { ToastrService } from 'ngx-toastr';
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

  filter : string = "f";
  constructor(
    private PaymentService:PaymentService,
    private ReservationService:ReservationService,
    private Toastr:ToastrService
    ){}
  Payments : Payment[] =[];
  ngOnInit(): void {
    this.GetAll();
  }
  Confirm(ReservationId:number){
    this.ReservationService.Confirm(ReservationId).subscribe({
      next: () => this.Toastr.success("تم تأكيد الدفع"),
        error: (error) => {
          this.Toastr.success("","حدث خطأ");
          console.log(error);
        }
    })
  }
  GetAll(){
    this.PaymentService.Get().subscribe(
      {
        next:(response)=>{
          this.Payments=response
          console.log(response);
        },
        error:(error)=>console.log(error)
      }
    )
  }

  GetUnconfirmed(){
      this.PaymentService.GetUnconfirmed().subscribe(
        {
          next:(response)=>{
            this.Payments=response
            console.log(response);
          },
          error:(error)=>console.log(error)
        }
      )
    
  }

  GetConfirmed(){
    this.PaymentService.GetConfirmed().subscribe(
      {
        next:(response)=>{
          this.Payments=response
          console.log(response);
        },
        error:(error)=>console.log(error)
      }
    )
  
}
}
