import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IVendor } from '../Models/IVendor';
import { Observable, forkJoin } from 'rxjs';
import { IUser } from '../Models/IUser';
import { IService } from '../Models/IService';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private HttpClient: HttpClient) { }

  // get(){
  //   return this.http.get<IUser[]>("http://localhost:3000/users/")
  // }

  getById(Id: string | null = null): Observable<IUser> {
    if (Id) {
      return this.HttpClient.get<IUser>(`${environment.apiUrl}/user/UserDetails/${Id}`)
    }
    else {
      throw "Check Id";
    }
  }
  UpdateVendor(updateData: FormData) {
    return this.HttpClient.put(`${environment.apiUrl}/User/Update`, updateData)
  }
  // getFollowing(Id:number){
  //   return this.http.get<any>(`http://localhost:3000/follows?userId=${Id}`)
  // }
}
