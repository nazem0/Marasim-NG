import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRegisterUserViewModel } from '../Models/IRegisterModel';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  httpUrl: string = "https://localhost:7292/"

  constructor(private http: HttpClient) { }

  registerUser(user: any):Observable<any> {
    return this.http.post<any>("https://localhost:7292/Account/Register", user)
  }
}
