import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../Models/IUser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  get(){
    return this.http.get<IUser[]>("http://localhost:3000/user/")
  }
  getByID(ID:number|null=null):Observable<IUser>
  {
    if(ID){
      return this.http.get<IUser>(`http://localhost:3000/user/${ID}`)
    }
    else{
      throw "Check ID";
    }
  }

  getFollowing(ID:number){
    return this.http.get<any>(`http://localhost:3000/follows?userId=${ID}`)
  }

  constructor(private http:HttpClient) {
  }
}
