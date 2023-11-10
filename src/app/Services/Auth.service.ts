import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment.development";
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = true;
  
  constructor(private HttpClient: HttpClient,private CookieService:CookieService,private Router:Router) { }
  private _isLoggedIn = new BehaviorSubject<boolean>(
    this.CookieService.check("Token")
  );
  isLoggedIn = this._isLoggedIn.asObservable();
  isAuthenticated(): {loggedIn:boolean, role:string} {
    return {
      loggedIn:this.loggedIn,
      role:this.CookieService.get("Role")
    };
  }

  login(credentials: any) {
    return this.HttpClient.post(`${environment.apiUrl}/account/login`, credentials)
  }

  addCookies(token:string,ProfilePicture:string,Role:string,Name:string,Id:string,vendorId?:string){
    // 4 days, then cookie will expire
    this.CookieService.set('Token',token,4);
    this.CookieService.set('ProfilePicture',ProfilePicture,4);
    this.CookieService.set('Role',Role,4);
    this.CookieService.set('Name',Name,4)
    this.CookieService.set('Id',Id,4)
    if(vendorId != undefined)
    {
      this.CookieService.set("VendorId",vendorId,4)
      console.log(vendorId);
    }
    this._isLoggedIn.next(true)
  }
  removeCookies() {
    
    console.log("cookies removed");
    this.CookieService.deleteAll();
    this.Router.navigateByUrl('/');
    this._isLoggedIn.next(false);
  }
  logout(){
    console.log("Logout")
    return this.HttpClient.get(`${environment.apiUrl}/account/logout`)
  }
}
