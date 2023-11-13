import { Component, OnInit, Input } from '@angular/core';
import { StatsService } from 'src/app/Services/Stats.service';

@Component({
  selector: 'app-stat-nav',
  templateUrl: './stat-nav.component.html',
  styleUrls: ['./stat-nav.component.css']
})
export class StatNavComponent implements OnInit {
  selectedTab : string = "tab1"
  completedOrdersChartComponent: any;
  constructor() { }
  ngOnInit() {}

  selectTab(tab: string) {
    this.selectedTab = tab;
  }
  loadStatsData() {
    if (this.selectedTab === 'tab1') {
      // Example: this.totalEarningsChartComponent.loadChartData();
    } else if (this.selectedTab === 'tab2') {
      this.completedOrdersChartComponent.loadChartData();
    }
  }
}
