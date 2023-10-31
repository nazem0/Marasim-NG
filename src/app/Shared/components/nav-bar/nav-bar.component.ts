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
  
  constructor(public AuthService:AuthService,private CookieService:CookieService){}
  userId = this.CookieService.get("ProfilePicture");
  profilePicture = this.CookieService.get("ProfilePicture");
  logout(){
    this.AuthService.logout();
    this.AuthService.removeCookies();
  }
}
