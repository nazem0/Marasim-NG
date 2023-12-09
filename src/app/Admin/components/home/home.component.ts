import { StatsService } from 'src/app/Services/Stats.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/Category.service';
import { PaymentService } from 'src/app/Services/Payment.service';
import { UserService } from 'src/app/Services/User.service';
import { VendorService } from 'src/app/Services/Vendor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit {
  numOfUsers: number | null = null;
  numOfVendors: number | null = null;
  numOfCategories: number | null = null;
  numOfPayments: number | null = null;
  years: number[] = [];
  currentYear = new Date().getFullYear();
  futureYear = this.currentYear +5;
  pastYear = this.currentYear -5;

  constructor(
    private UserService: UserService,
    private VendorService: VendorService,
    private PaymentService: PaymentService,
    private CategoryService: CategoryService,
    private statsService: StatsService
  ) {

    for (let i = this.pastYear; i <= this.futureYear; i++) {
      this.years.push(i);
      console.log(this.years);
    }
  }
  ngAfterViewInit(): void {
    document.querySelector("#year")?.addEventListener("change",(e)=>{
      let yearSelector = e.target as HTMLInputElement
      this.loadTotalProfitsData(yearSelector.value)
    })
  }

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
    this.loadTotalProfitsData();
  }

  lineChartData: any = {}; // Modify the lineChartData initialization
  chartOptions: any = {
    scales: {
      x: {
        ticks: {
          font: {
            family: "Alexandria",
            size: 12
          }
        }
      },
      y: {
        ticks: {
          font: {
            family: "Alexandria",
            size: 12
          }
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          font: {
            family: "Alexandria",
            size: 12
          }
        }
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            var label = context.dataset.label.toLocaleString() || '';

            if (label) {
              label += ': ';
            }
            label += context.parsed.y;

            return label;
          }
        },
        displayColors: false,
        title: '',
        bodyFont: {
          family: "Alexandria",
          size: 12
        }
      }
    }
  };
  loadTotalProfitsData(Year: string | number = this.currentYear) {
    this.statsService.getOurTotalProfits(Year).subscribe({
      next: (data: any) => {
        console.log(data);
        this.lineChartData = {
          labels: Object.keys(data),
          datasets: [
            {
              data: Object.values(data),
              label: 'الارباح',
              fill: true,
              backgroundColor: 'rgba(255, 240, 34, 0.3)',
              borderColor: 'green',
              tension: 0.5,
            },
          ],
        };
      },
      error: (error: any) => {
        console.error('Error fetching total profit stats', error);
      },
    });
  }
}
