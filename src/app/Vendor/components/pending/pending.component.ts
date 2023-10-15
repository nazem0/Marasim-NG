import { Component } from '@angular/core';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent {
  activeTab: string = 'المعلقـة';
  lineStyles: { [key: string]: string } = {};

  setActiveTab(tab: string) {
    this.activeTab = tab;
    this.updateLineStyles();
  }

  updateLineStyles() {
    const tabButton = document.querySelector('.tab-btn.active') as HTMLElement;
    if (tabButton) {
      this.lineStyles = {
        width: tabButton.offsetWidth + 'px',
        left: tabButton.offsetLeft + 'px',
      };
    }
  }
}
