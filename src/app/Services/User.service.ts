import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { IUser } from '../Models/IUser';
import { environment } from 'src/environments/environment.development';
import { PaginationViewModel } from '../Models/PaginationViewModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private HttpClient: HttpClient) { }

  GetAll(PageIndex: number, PageSize: number): Observable<PaginationViewModel<IUser>> {
    return this.HttpClient.get<PaginationViewModel<IUser>>(`${environment.apiUrl}/User/Get?PageSize=${PageSize}&PageIndex=${PageIndex}`)
  }

  Count(): Observable<number> {
    return this.HttpClient.get<number>(`${environment.apiUrl}/User/Count`)
  }

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

  GetProfilePicUrl(UserId: string | null = null, PicUrl: string | null = null) {
    if(UserId && PicUrl)
      return `${environment.serverUrl}/${UserId}/ProfilePicture/${PicUrl}`
    else
    return "/assets/img/question-mark.png"
  }
}
