import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment.development";
import { CookieService } from 'ngx-cookie-service';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = true;
  constructor(private HttpClient: HttpClient,private CookieService:CookieService) { }
  isAuthenticated(): Promise<boolean> {
    const promise: Promise<boolean> = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 800);
      }
    );
    return promise;
  }

  login(credentials: any) {
    return this.HttpClient.post(`${environment.apiUrl}/account/login`, credentials)
  }

  logout() {
    this.CookieService.delete("Marasim-Login-Token");
  }
}
