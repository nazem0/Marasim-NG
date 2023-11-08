import { Component } from '@angular/core';

@Component({
  selector: 'app-v-dashboard',
  templateUrl: './v-dashboard.component.html',
  styleUrls: ['./v-dashboard.component.css']
})
export class VDashboardComponent {
  sidebarOpen = false;

  menuBtnChange(): void {
    if (this.sidebarOpen) {
      document.getElementById('btn')?.classList.replace('fa-solid fa-bars', 'fa-solid fa-xmark');
    } else {
      document.getElementById('btn')?.classList.replace('fa-solid fa-xmark', 'fa-solid fa-bars');
    }
  }

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
    this.menuBtnChange();
  }

}
