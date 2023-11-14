import { Component, Output } from '@angular/core';
import { StatsService } from 'src/app/Services/Stats.service';


@Component({
  selector: 'app-completed-orders-chart',
  templateUrl: './completed-orders-chart.component.html',
  styleUrls: ['./completed-orders-chart.component.css']
})
export class CompletedOrdersChartComponent {
  @Output() activeTab: string = 'tap1';
  barChartData: any = {};
  barChartOptions: any = {}


  constructor(private statsService: StatsService) { }
  loadTotalOrderData() {
    this.statsService.getCompletedOrdersStats().subscribe({
      next: (data: any) => {
        console.log(data);
        this.barChartData = {
          labels: Object.keys(data),
          datasets: [
            {
              data: Object.values(data),
              
              label: ' الحجوزات التي تمت في 2023',
              backgroundColor: '#088f95',
              display: true,
              fontColor: '#333', // You can customize the color
            }
          ]
        };
        this.configureChartOptions();

      },
      error: (error: any) => {
        console.error('Error fetching total order stats', error);
      }
    });
  }
  configureChartOptions() {
    this.barChartData.options = {
      scales: {
        xAxes: [
          {
          },
        ],
        yAxes: [
          {
            ticks: {
              fontColor: '#black', 
              stepSize: 1,
            },
          },
        ],
      },
    };
  }
  ngOnInit(): void {
    this.loadTotalOrderData();
  }
}
