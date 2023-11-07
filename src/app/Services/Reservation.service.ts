import { AddReservation } from './../Models/AddReservation';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Reservation } from '../Models/Reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private HttpClient: HttpClient) { }
  addReservation(Data: any) {
    return this.HttpClient.post(`${environment.apiUrl}/Reservation/Add`, Data)
  }
  GetAllByUserId(UserId:string){
    return this.HttpClient.get<Reservation[]>(`${environment.apiUrl}/Reservation/GetAllByUserId/${UserId}`)
  }
  GetPendingByUserId(UserId:string){
    return this.HttpClient.get<Reservation[]>(`${environment.apiUrl}/Reservation/GetPendingByUserId/${UserId}`)
  }
  GetAcceptedByUserId(UserId:string){
    return this.HttpClient.get<Reservation[]>(`${environment.apiUrl}/Reservation/GetAcceptedByUserId/${UserId}`)
  }
  GetRejectedByUserId(UserId:string){
    return this.HttpClient.get<Reservation[]>(`${environment.apiUrl}/Reservation/GetRejectedByUserId/${UserId}`)
  }
}
