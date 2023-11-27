import { Component, OnInit } from '@angular/core';
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

  constructor(private WithdrawalService: WithdrawalService) { }

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
}