import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IFollowUser, IFollowVendor } from '../Models/IFollow';
import { IPost } from '../Models/IPost';

@Injectable({ providedIn: 'root' })
export class FollowService {
  constructor(private HttpClient: HttpClient) { }

  GetWhoFollowsVendors(VendorId : number): Observable<IFollowUser[]> {
    return this.HttpClient.get<IFollowUser[]>(`${environment.apiUrl}/Follow/GetFollowersVendor/${VendorId}`)
  }

  GetWhoUserFollows(): Observable<IFollowVendor[]> {
    return this.HttpClient.get<IFollowVendor[]>(`${environment.apiUrl}/Follow/GetFollowingForUser/`)
  }

  GetPostsByFollow(): Observable<IPost[]>{
    return this.HttpClient.get<IPost[]>(`${environment.apiUrl}/Follow/GetPostsByFollow/`)
  }

  Add(Follow: any) {
    return this.HttpClient.post(`${environment.apiUrl}/Follow/Add`, Follow)
  }

  Delete(VendorId: number) {
    return this.HttpClient.delete(`${environment.apiUrl}/Follow/Remove/${VendorId}`)
  }
  
  IsFollowing(VendorId: number): Observable<boolean> {
    return this.HttpClient.get<boolean>(`${environment.apiUrl}/Follow/IsUserFollowingVendor/${VendorId}`)
  }
}
