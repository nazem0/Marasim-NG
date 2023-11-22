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
export class UserAuthGuard implements CanActivate, CanActivateChild {
  constructor(private router:Router,private CookieService: CookieService, private toastr: ToastrService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.CookieService.get("Role").includes("user")) {
      return true;
    } else {
      this.toastr.info("إذا كنت تريد عرض هذه الصفحة عليك التسجيل اولاً","مرحبا بك");
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
