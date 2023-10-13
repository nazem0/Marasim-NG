import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IVendor } from '../Models/IVendor';
import { Observable, forkJoin } from 'rxjs';
import { IUser } from '../Models/IUser';
import { IService } from '../Models/IService';
import { IServiceAttachment } from '../Models/IServiceAttachment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  get(){
    return this.http.get<IUser[]>("http://localhost:3000/users/")
  }
  getByID(ID:number|null=null):Observable<IUser>
  {
    if(ID){
      return this.http.get<IUser>(`http://localhost:3000/users/${ID}`)
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
