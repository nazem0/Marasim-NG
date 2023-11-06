import { CookieService } from 'ngx-cookie-service';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/Auth.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent   {
  apiUrl=environment.serverUrl;
  isVendor:boolean=this.CookieService.get('Role').includes('vendor');

  constructor(public AuthService:AuthService,private CookieService:CookieService){
    this.isVendor=true;
  }
  userId = this.CookieService.get("Id");
  profilePicture = this.CookieService.get("ProfilePicture");
  name = this.CookieService.get("Name");
  role = this.CookieService.get("Role")
  logout(){
    this.AuthService.logout();
    this.AuthService.removeCookies();
  }
}
