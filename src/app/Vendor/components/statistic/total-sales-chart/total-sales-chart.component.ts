// total-sales-chart.component.ts
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

  chartOptions: any = {
    scales: {
      x: {
        // title: {
        //   display: true,
        //   text: 'الشهور',
        //   font: {
        //     family:"Alexandria",
        //     size: 20 
        //   }
        // },
        ticks: {
          font: {
            family:"Alexandria",
            size: 12
          }
        }
      },
      y: {
        // title: {
        //   display: true,
        //   // text: 'المبيعات',
        //   font: {
        //     family:"Alexandria",
        //     size: 20
        //   }
        // },
        ticks: {
          font: {
            family:"Alexandria",
            size: 12
          }
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          font: {
            family:"Alexandria",
            size: 12
          }
        }
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            var label = context.dataset.label || '';

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
          family:"Alexandria",
          size: 12
        }
      }
    }
  };

  loadTotalSalesData() {
    this.statsService.getTotalSalesStats().subscribe({
      next: (data: any) => {
        console.log(data);
        this.salesLinetData = {
          labels: Object.keys(data),
          datasets: [
            {
              data: Object.values(data),
              label: 'اجمالي المبيعات',
              fill: true,
              backgroundColor: 'rgba(8, 143, 149, 0.5)',
              borderColor: 'rgba(8, 143, 149, 1)',
              borderWidth: 2,
              pointStyle: 'circle',
              pointRadius: 5,
              pointBackgroundColor: 'rgba(8, 143, 149, 1)',
              tension: 0.4,
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
