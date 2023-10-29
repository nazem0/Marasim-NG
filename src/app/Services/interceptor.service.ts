import { CookieService } from 'ngx-cookie-service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private CookieService:CookieService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.CookieService.get('Marasim-Login-Token');
    req = req.clone({
      setHeaders:{
        Authorization:`Bearer ${token}`
      }
      }
    )
    console.log(req);
    return next.handle(req);
  }
}
