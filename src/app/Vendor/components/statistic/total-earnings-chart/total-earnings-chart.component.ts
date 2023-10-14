import { Component } from '@angular/core';

@Component({
  selector: 'app-total-earnings-chart',
  templateUrl: './total-earnings-chart.component.html',
  styleUrls: ['./total-earnings-chart.component.css']
})
export class TotalEarningsChartComponent {
 
  lineChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
      {
        data: [89, 34, 43, 54, 28, 74, 93],
        label: 'الارباح',
        fill: true,
        backgroundColor: 'rgba(255, 240, 34, 0.3',
        borderColor: 'black',
        tension: 0.5
      }
    ]
  }


  constructor() { }

  ngOnInit(): void {
  }

}
