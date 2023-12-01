import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { IFollowUser, IFollowVendor } from '../Models/IFollow';
import { PaginationViewModel } from '../Models/PaginationViewModel';

@Injectable({ providedIn: 'root' })
export class FollowService {
  constructor(private HttpClient: HttpClient) { }

  GetWhoFollowsVendors(VendorId: number): Observable<PaginationViewModel<IFollowUser>> {
    return this.HttpClient.get<PaginationViewModel<IFollowUser>>(`${environment.apiUrl}/Follow/GetFollowersVendor/${VendorId}`)
  }

  GetWhoUserFollows(): Observable<PaginationViewModel<IFollowVendor>> {
    return this.HttpClient.get<PaginationViewModel<IFollowVendor>>(`${environment.apiUrl}/Follow/GetFollowingForUser/`)
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
