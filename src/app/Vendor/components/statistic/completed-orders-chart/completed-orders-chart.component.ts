import { Component } from '@angular/core';
import { StatsService } from 'src/app/Services/Stats.service';

@Component({
  selector: 'app-completed-orders-chart',
  templateUrl: './completed-orders-chart.component.html',
  styleUrls: ['./completed-orders-chart.component.css']
})
export class CompletedOrdersChartComponent {
  barChartData: any = {};
  barChartOptions: any = {};

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
              label: 'الحجوزات المكتملة',
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

  ngOnInit(): void {this.loadTotalOrderData();}
  chartOptions: any = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'الشهور',
          font: {
            size: 30 
          }
        },
        ticks: {
          font: {
            size: 18 
          }
        }
      },
      y: {
        title: {
          display: true,
          text: ' الحجوزات ',
          font: {
            size: 30
          }
        },
        ticks: {
          font: {
            size: 18 
          },
          stepSize: 1 
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          font: {
            size: 20 
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
        title: function () {
          return ''; 
        },
        bodyFont: {
          size: 18 
        }
      }
    }
  };
  createGradient() {
    const ctx = document.createElement('canvas').getContext('2d');
    const gradient = ctx!.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, 'rgba(8, 143, 149, 0.8)');
    gradient.addColorStop(1, 'rgba(8, 143, 149, 0)');
    return gradient;
  }

    
  }

