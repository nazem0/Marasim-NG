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

import { ToastrService } from 'ngx-toastr';
@Injectable()
export class VendorAuthGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router, private CookieService: CookieService,private toastr:ToastrService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.CookieService.get("Role").includes("vendor")) {
      return true;
    } else {
      this.toastr.error("ليس لديك صلاحية للدخول على هذه الصفحة")
      this.router.navigate(['/'])
      console.log(this.CookieService.get("Role"));
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
