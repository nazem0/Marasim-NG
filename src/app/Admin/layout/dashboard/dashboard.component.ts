import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

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
