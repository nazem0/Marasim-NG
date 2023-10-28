import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  barChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
      {
        data: [100, 200, 300, 200, 400, 300, 200],
        label: 'عدد الزوار',
        backgroundColor: '#f88406'
      }
    ]
  }
  lineChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
      {
        data: [8900, 7400, 8300, 6400, 5800, 4400, 6300],
        label: 'الارباح',
        fill: true,
        backgroundColor: 'rgba(255, 240, 34, 0.3',
        borderColor: 'green',
        tension: 0.5
      }
    ]
  }


}
