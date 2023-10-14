import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stat-nav',
  templateUrl: './stat-nav.component.html',
  styleUrls: ['./stat-nav.component.css']
})
export class StatNavComponent implements OnInit {
  selectedTab : string = "tab1"
  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  constructor() { }

  ngOnInit() {}
}
