import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRegisterUserViewModel } from '../Models/IRegisterModel';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http: HttpClient) { }

  registerUser(user: any):Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/Account/Register`, user)
  }
  registerVendor(vendor:any):Observable<any>{
    return this.http.post(`${environment.apiUrl}/Account/RegisterAsVendor`,vendor)
  }
}
