import { UserService } from 'src/app/Services/User.service';
import { Component } from '@angular/core';
import { VendorPayment } from 'src/app/Models/Payment';
import { PaginationViewModel } from 'src/app/Models/PaginationViewModel';
import { PaymentService } from 'src/app/Services/Payment.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent {
  payments : PaginationViewModel<VendorPayment> | null = null;
  constructor(
    private PaymentService:PaymentService,
    public UserService:UserService
    ){
    this.PaymentService.GetVendorPayments().subscribe({
      next:response=>{
        this.payments = response
        console.log(this.payments);
      },
      error:error=>console.log(error)
    })
  }
}
