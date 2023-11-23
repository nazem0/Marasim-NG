import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/Auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  sidebarOpen = false;

  constructor(public AuthService: AuthService) { }

  menuBtnChange(): void {
    if (this.sidebarOpen) {
      document.getElementById('btn')?.classList.replace('fa-bars', 'fa-xmark');
    } else {
      document.getElementById('btn')?.classList.replace('fa-xmark', 'fa-bars');
    }
  }

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
    this.menuBtnChange();
  }


  logout() {
    this.AuthService.logout();
    this.AuthService.removeCookies();
  }

}
