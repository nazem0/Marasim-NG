import { Component } from '@angular/core';
import { CategoryService } from 'src/app/Services/Category.service';
import { PaymentService } from 'src/app/Services/Payment.service';
import { UserService } from 'src/app/Services/User.service';
import { VendorService } from 'src/app/Services/Vendor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  numOfUsers: number | null = null;
  numOfVendors: number | null = null;
  numOfCategories: number | null = null;
  numOfPayments: number | null = null;

  constructor(
    private UserService: UserService,
    private VendorService: VendorService,
    private PaymentService: PaymentService,
    private CategoryService: CategoryService
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.UserService.Count()
      .subscribe({
        next: (result) => {
          this.numOfUsers = result;
        },
        error: (error) => {
          console.log(error)
        }
      });
    this.VendorService.Count()
      .subscribe({
        next: (result) => {
          this.numOfVendors = result;
        },
        error: (error) => {
          console.log(error)
        }
      });
    this.CategoryService.Count()
      .subscribe({
        next: (result) => {
          this.numOfCategories = result;
        },
        error: (error) => {
          console.log(error)
        }
      });
    this.PaymentService.Count()
      .subscribe({
        next: (result) => {
          this.numOfPayments = result;
        },
        error: (error) => {
          console.log(error)
        }
      });
  }






  barChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
      {
        data: [100, 200, 300, 200, 400, 300, 200],
        label: 'عدد الزوار',
        backgroundColor: '#f88406'
      }
    ]
  }
  lineChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
      {
        data: [8900, 7400, 8300, 6400, 5800, 4400, 6300],
        label: 'الارباح',
        fill: true,
        backgroundColor: 'rgba(255, 240, 34, 0.3',
        borderColor: 'green',
        tension: 0.5
      }
    ]
  }


}
