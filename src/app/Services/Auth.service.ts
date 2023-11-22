import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment.development";
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { LoginResponse } from '../Models/LoginResponse';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = true;

  constructor(
    private HttpClient: HttpClient,
    private CookieService: CookieService,
    private Router: Router,
    private Toastr: ToastrService) { }
  private _isLoggedIn = new BehaviorSubject<boolean>(
    this.CookieService.check("Token")
  );
  isLoggedIn = this._isLoggedIn.asObservable();
  isAuthenticated(): { loggedIn: boolean, role: string } {
    return {
      loggedIn: this.loggedIn,
      role: this.CookieService.get("Role")
    };
  }

  login(credentials: any) {
    this.HttpClient.post<LoginResponse>(`${environment.apiUrl}/account/login`, credentials).subscribe({
      next:(LoginResponse) => {
        this.addCookies(LoginResponse.token, LoginResponse.profilePicture, LoginResponse.role, LoginResponse.name, LoginResponse.id, LoginResponse.vendorId);
      },
      error:(error)=>{
        this.Toastr.error("تأكد من بياناتك ثم حاول مرة اخرى")
        console.log(error);
      }
    })
  }

  addCookies(token: string, ProfilePicture: string, Role: string, Name: string, Id: string, vendorId?: string) {
    // 4 days, then cookie will expire
    this.CookieService.set('Token', token, 4);
    this.CookieService.set('ProfilePicture', ProfilePicture, 4);
    this.CookieService.set('Role', Role, 4);
    this.CookieService.set('Name', Name, 4)
    this.CookieService.set('Id', Id, 4)
    if (vendorId != undefined) {
      this.CookieService.set("VendorId", vendorId, 4)
      console.log(vendorId);
    }
    this._isLoggedIn.next(true)
    this.Toastr.success("تم تسجيل الدخول")
    if(Role.includes("admin"))
      this.Router.navigate(["/admin"]);
    else if(Role.includes("vendor")){
      this.Router.navigate(["/vendor"]);
    }
    else
    this.Router.navigate(["/home"]);
  }
  removeCookies() {
    console.log("cookies removed");
    this.CookieService.deleteAll();
    this._isLoggedIn.next(false);
    this.Toastr.success("تم تسجيل الخروج")
    this.Router.navigate(["/"]);
  }
  logout() {
    this.HttpClient.get(`${environment.apiUrl}/account/logout`).subscribe(() => this.removeCookies());
  }
}
