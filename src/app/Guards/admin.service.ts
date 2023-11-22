import { CookieService } from 'ngx-cookie-service';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable()
export class AdminAuthGuard implements CanActivate, CanActivateChild {
  constructor(private router:Router,private CookieService: CookieService, private toastr: ToastrService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let roles = this.CookieService.get("Role");
    if (roles.includes("admin")) {
      return true;
    } else {
      this.toastr.error("ليس لديك صلاحية للدخول على هذه الصفحة")
      this.router.navigate(['/'])
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
