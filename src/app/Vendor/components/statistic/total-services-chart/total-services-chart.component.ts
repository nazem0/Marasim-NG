import { Component } from '@angular/core';

@Component({
  selector: 'app-total-services-chart',
  templateUrl: './total-services-chart.component.html',
  styleUrls: ['./total-services-chart.component.css']
})
export class TotalServicesChartComponent {
  barChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
      {
        data: [1, 2, 3, 4, 5, 6, 9],
        label: 'عدد الخدمات',
        backgroundColor: '#f88406'
      }
    ]
  }


  constructor() { }

  ngOnInit(): void {
  }

}