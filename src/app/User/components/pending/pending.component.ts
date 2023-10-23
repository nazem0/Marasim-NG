import { Component } from '@angular/core';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent {
  activeTab: string = 'المعلقـة';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
  
}
