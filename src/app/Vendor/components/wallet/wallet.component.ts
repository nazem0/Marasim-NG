import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/User.service';
import { Component, OnInit } from '@angular/core';
import { VendorPayment } from 'src/app/Models/Payment';
import { PaginationViewModel } from 'src/app/Models/PaginationViewModel';
import { PaymentService } from 'src/app/Services/Payment.service';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  payments: PaginationViewModel<VendorPayment> | null = null;
  balance: number | null = null;
  page = 1;
  itemsPerPage = 3;
  public config: PaginationInstance = {
    id: 'paginationConfig',
    itemsPerPage: this.itemsPerPage,
    currentPage: this.page,
  };

  constructor(
    private paymentService: PaymentService,
    public UserService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      let pageIndex = params.get("page");
      if (pageIndex) {
        this.page = parseInt(pageIndex);
        this.getData();
      }
    });

    this.paymentService.GetVendorBalance().subscribe({
      next: resp => this.balance = resp,
      error: error => console.log(error)
    });
  }

  pageChange(newPage: number) {
    this.router.navigate(['../', newPage], { relativeTo: this.activatedRoute });
  }

  getData() {
    this.paymentService.GetVendorPayments(this.page, this.itemsPerPage).subscribe({
      next: result => {
        this.payments = result;
        this.config.currentPage = result.pageIndex;
        this.config.totalItems = result.count;
        this.config.itemsPerPage = result.pageSize;
      },
      error: error => console.log(error)
    });
  }
}
