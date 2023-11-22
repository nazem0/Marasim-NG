import { CookieService } from 'ngx-cookie-service';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/Auth.service';
import { environment } from 'src/environments/environment';
import { UserService } from 'src/app/Services/User.service';

@Component({
  selector: 'app-v-dashboard',
  templateUrl: './v-dashboard.component.html',
  styleUrls: ['./v-dashboard.component.css']
})
export class VDashboardComponent {
  apiUrl=environment.serverUrl;
  isVendor:boolean=this.CookieService.get('Role').includes('vendor');

  constructor(
    public UserService: UserService,
    public AuthService:AuthService,
    private CookieService:CookieService){
    this.isVendor=true;
  }
  userId = this.CookieService.get("Id");
  profilePicture = this.CookieService.get("ProfilePicture");
  name = this.CookieService.get("Name");
  role = this.CookieService.get("Role")
  vendorId = this.CookieService.get("VendorId");
  logout(){
    this.AuthService.logout();
    this.AuthService.removeCookies();
  }



  sidebarOpen = false;

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

}
