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
  // loadTotalOrderData() {
  //   this.statsService.getCompletedOrdersStats().subscribe({
  //     next: (data: any) => {
  //       console.log(data);
  //       this.barChartData = {
  //         labels: Object.keys(data),
  //         datasets: [
  //           {
  //             data: Object.values(data),
  //             label: 'الحجوزات التي تمت في 2023',
  //             backgroundColor: 'rgba(8, 143, 149, 0.5)',
  //             display: true,
  //             fontColor: '#333',
  //             borderWidth: 1,
  //             fontSize: 14,  // Adjust the font size as needed
  //             barPercentage: 0.8


  //           }
  //         ]
  //       };

  //     },
  //     error: (error: any) => {
  //       console.error('Error fetching total order stats', error);
  //     }
  //   });
  // }
  loadTotalOrderData() {
    this.statsService.getCompletedOrdersStats().subscribe({
      next: (data: any) => {
        console.log(data);
        this.barChartData = {
          labels: Object.keys(data),
          datasets: [
            {
              data: Object.values(data),
              label: 'الحجوزات التي تمت في 2023',
              backgroundColor: this.createGradient(), 
              borderColor: 'rgba(8, 143, 149, 1)',
              borderWidth: 1,
              barPercentage: 0.8,
              hoverBackgroundColor: 'rgba(8, 143, 149, 0.7)',
              hoverBorderColor: 'rgba(8, 143, 149, 1)'
            }
          ]
        };
  
      },
      error: (error: any) => {
        console.error('Error fetching total order stats', error);
      }
    });
  }
  createGradient() {
    const ctx = document.createElement('canvas').getContext('2d');
    const gradient = ctx!.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, 'rgba(8, 143, 149, 0.8)');
    gradient.addColorStop(1, 'rgba(8, 143, 149, 0)');
    return gradient;
  }
  ngOnInit(): void {
    this.loadTotalOrderData();
  }
}
