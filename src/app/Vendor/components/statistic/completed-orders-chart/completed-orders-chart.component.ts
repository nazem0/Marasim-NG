import { Component,Output } from '@angular/core';
import { StatsService } from 'src/app/Services/Stats.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-completed-orders-chart',
  templateUrl: './completed-orders-chart.component.html',
  styleUrls: ['./completed-orders-chart.component.css']
})
export class CompletedOrdersChartComponent {
  @Output() activeTab: string = 'tap1';
  barChartData: any = {};

  constructor( private statsService :StatsService ,private CookieService: CookieService,
    ) { }
  loadTotalOrderData() {
    this.statsService.GetTotalOrder().subscribe({
      next: (data: any) => {
        console.log(data);
        this.barChartData = {
          labels: Object.keys(data),
          datasets: [
            {
              data: Object.values(data),
              label: 'الحجوزات التي تمت',
              backgroundColor: '#088f95'
            }
          ]
        };
      },
      error: (error: any) => {
        console.error('Error fetching total order stats', error);
      }
    });
  }
  ngOnInit(): void {
    this.loadTotalOrderData();
  }


}
