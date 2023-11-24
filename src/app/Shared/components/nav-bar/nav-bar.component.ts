import { CookieService } from 'ngx-cookie-service';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/Auth.service';
import { environment } from 'src/environments/environment.development';
import { UserService } from 'src/app/Services/User.service';
import { InvitationService } from 'src/app/Services/invitation.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  apiUrl = environment.serverUrl;
  isUser: boolean = false;
  isVendor: boolean = false;
  invetationId: number | null = null;

  constructor(
    public AuthService: AuthService,
    private CookieService: CookieService,
    public UserService: UserService,
    private InvetationService: InvitationService
  ) {
    this.isVendor = this.CookieService.get('Role').includes('vendor');
    this.isUser = this.CookieService.get('Role').includes('user');
    this.InvetationService.getInvitaionId().subscribe({
      next: (result) => {
        this.invetationId = result;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
  userId = this.CookieService.get("Id");
  profilePicture = this.CookieService.get("ProfilePicture");
  name = this.CookieService.get("Name");
  role = this.CookieService.get("Role")
  logout() {
    this.AuthService.logout();
    this.AuthService.removeCookies();
  }
}
