import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaginationInstance } from 'ngx-pagination';
import { PaginationViewModel } from 'src/app/Models/PaginationViewModel';
import { Withdrawal } from 'src/app/Models/Withdrawal';
import { WithdrawalService } from 'src/app/Services/Withdrawal.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.css'],
})
export class WithdrawalComponent implements OnInit {
  Withdrawals: PaginationViewModel<Withdrawal> | null = null;
  p: number | undefined = undefined;
  public config: PaginationInstance = {
    id: 'paginationConfig',
    itemsPerPage: 5,
    currentPage: 1,
  };
  constructor(
    private WithdrawalService: WithdrawalService,
    private Toastr: ToastrService,
    private Router: Router,
    private ActivatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.config.currentPage = parseInt(params.get('page')!);
        this.getData();
      },
    });
  }

  getData() {
    this.WithdrawalService.GetAll(this.config.currentPage, this.config.itemsPerPage).subscribe({
      next: (result) => {
        this.Withdrawals = result;
        this.config.currentPage = result.pageIndex;
        this.config.totalItems = result.count;
        this.config.itemsPerPage = result.pageSize;
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

  pageChange(newPage: number) {
    this.Router.navigate(['../', newPage], { relativeTo: this.ActivatedRoute })
  }
}