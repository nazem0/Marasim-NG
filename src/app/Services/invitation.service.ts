import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Invitation } from '../Models/Invitation';

@Injectable({
  providedIn: 'root'
})
export class InvitationService {

  constructor(private HttpClient: HttpClient) { }
  add(Data: any) {
    return this.HttpClient.post(`${environment.apiUrl}/Invitation/Add`, Data)
  }
  getById(Id: number) {
    return this.HttpClient.get<Invitation>(`${environment.apiUrl}/Invitation/Get/${Id}`)
  }

  getInvitaions() {
    return this.HttpClient.get<Invitation[]>(`${environment.apiUrl}/Invitation/GetByUserId/`)
  }

  delete(Id: number) {
    return this.HttpClient.get(`${environment.apiUrl}/Invitation/Delete/${Id}`)
  }
}
