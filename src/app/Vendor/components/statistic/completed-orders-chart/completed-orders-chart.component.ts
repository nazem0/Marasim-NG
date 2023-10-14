import { Component,Output } from '@angular/core';

@Component({
  selector: 'app-completed-orders-chart',
  templateUrl: './completed-orders-chart.component.html',
  styleUrls: ['./completed-orders-chart.component.css']
})
export class CompletedOrdersChartComponent {
  @Output() activeTab: string = 'tap1';

  barChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
      {
        data: [89, 34, 43, 54, 28, 74, 93],
        label: 'الحجوزات التي تمت',
        backgroundColor: '#088f95'
      }
    ]
  }


  constructor() { }

  ngOnInit(): void {
  }

}
