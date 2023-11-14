import { Component } from '@angular/core';
import { StatsService } from 'src/app/Services/Stats.service';

@Component({
  selector: 'app-total-sales-chart',
  templateUrl: './total-sales-chart.component.html',
  styleUrls: ['./total-sales-chart.component.css']
})
export class TotalSalesChartComponent {
  constructor(private statsService: StatsService) { }
  salesLinetData: any = {};
  
  loadTotalSalesData() {
    this.statsService.getTotalSalesStats().subscribe({
      next: (data: any) => {
        console.log(data);
        this.salesLinetData = {
          labels: Object.keys(data),
          datasets: [
            {
              data: Object.values(data),
              
              label: ' الارباح سنة 2023',
               fill: true,
               backgroundColor: '#088f95',
               borderColor: 'black',
               tension: 0.5
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
    this.loadTotalSalesData();
  }

}
