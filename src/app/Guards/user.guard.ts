import { CookieService } from 'ngx-cookie-service';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateChild,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { AuthService } from '../Services/Auth.service';
@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router,private CookieService:CookieService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.CookieService.get("Role").includes("vendor")) {
      console.log("Authorized")
      console.log(this.CookieService.get("Role"))

      return true;
    } else {
      console.log("Unauthorized")
      console.log(this.CookieService.get("Role"))
      this.router.resetConfig(this.router.config);
      this.router.navigate(['/']);

      return false;
    }
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}
