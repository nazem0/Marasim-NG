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
            label: 'الأرباح سنة 2023',
            fill: true,
            backgroundColor: 'rgba(8, 143, 149, 0.5)',
            borderColor: 'rgba(8, 143, 149, 1)', 
            borderWidth: 2, 
            pointStyle: 'circle',
            pointRadius: 5, 
            pointBackgroundColor: 'rgba(8, 143, 149, 1)',
            tension: 0.4
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
