import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/User.service';
import { Component, OnInit } from '@angular/core';
import { VendorPayment } from 'src/app/Models/Payment';
import { PaginationViewModel } from 'src/app/Models/PaginationViewModel';
import { PaymentService } from 'src/app/Services/Payment.service';
import { PaginationInstance } from 'ngx-pagination';
import { WithdrawalService } from 'src/app/Services/Withdrawal.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  payments: PaginationViewModel<VendorPayment> | null = null;
  balance: number | null = null;
  data: FormData;
  page = 1;
  itemsPerPage = 3;
  public config: PaginationInstance = {
    id: 'paginationConfig',
    itemsPerPage: this.itemsPerPage,
    currentPage: this.page,
  };

  constructor(
    private paymentService: PaymentService,
    private WithdrawalService: WithdrawalService,
    public UserService: UserService,
    private Toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.data = new FormData();
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      let pageIndex = params.get("page");
      if (pageIndex) {
        this.page = parseInt(pageIndex);
        this.getData();
      }
    });
    this.getBalance();

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

  getBalance() {
    this.paymentService.GetVendorBalance().subscribe({
      next: resp => this.balance = resp,
      error: error => console.log(error)
    });
  }

  requestMoney() {
    let inputElement = document.getElementById('Instapay') as HTMLInputElement;
    let instaPay = inputElement.value;
    this.data.set('Instapay', instaPay);
    this.WithdrawalService.Add(this.data).subscribe({
      next: () => {
        this.Toastr.success("تم ارسال طلبك");
        this.getBalance();
      },
      error: (error) => {
        this.Toastr.error("برجاء المحاولة مرة أخرى", "حدث خطأ");
        console.log(error);
      }
    });;
  }
}
