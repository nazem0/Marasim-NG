import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../Models/IUser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  get(){
    return this.http.get<IUser[]>("http://localhost:3000/User/")
  }
  getByID(ID:number|null=null):Observable<IUser>
  {
    if(ID){
      return this.http.get<IUser>(`http://localhost:3000/User/${ID}`)
    }
    else{
      throw "Check ID";
    }
  }

  constructor(private http:HttpClient) {
  }
}
