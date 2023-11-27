import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaginationViewModel } from 'src/app/Models/PaginationViewModel';
import { Withdrawal } from 'src/app/Models/Withdrawal';
import { WithdrawalService } from 'src/app/Services/Withdrawal.service';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.css'],
})
export class WithdrawalComponent implements OnInit {
  Withdrawals: PaginationViewModel<Withdrawal> | null = null;

  constructor(
    private WithdrawalService: WithdrawalService,
    private Toastr: ToastrService
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.WithdrawalService.GetAll().subscribe({
      next: (result) => {
        this.Withdrawals = result;
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  confirmWithdrawal(withdrawalId: number) {
    this.WithdrawalService.Confirm(withdrawalId).subscribe({
      next: (result) => {
        console.log("confirm")
        this.Toastr.success("تم تأكيد الطلب");
        this.getData();
      },
      error: (error) => {
        this.Toastr.error("", "حدث خطأ");
        console.log(error)
      }
    })
  }
}