import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IFollowUser, IFollowVendor } from '../Models/IFollow';

@Injectable({ providedIn: 'root' })
export class FollowService {
  constructor(private HttpClient: HttpClient) { }

  GetWhoFollowsVendors(VendorId : number): Observable<IFollowUser[]> {
    return this.HttpClient.get<IFollowUser[]>(`${environment.apiUrl}/Follow/GetFollowersVendor/${VendorId}`)
  }

  GetWhoUserFollows(UserId : string): Observable<IFollowVendor[]> {
    return this.HttpClient.get<IFollowVendor[]>(`${environment.apiUrl}/Follow/GetFollowingForUser/${UserId}`)
  }

  Add(Follow: any) {
    return this.HttpClient.post(`${environment.apiUrl}/Follow/Add`, Follow)
  }

  Delete(VendorId: number) {
    return this.HttpClient.delete(`${environment.apiUrl}/Follow/Remove/${VendorId}`)
  }
  
}
