import { VendorReservation } from './../Models/Reservation';
import { AddReservation } from './../Models/AddReservation';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { UserReservation } from '../Models/Reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private HttpClient: HttpClient) { }
  addReservation(Data: any) {
    return this.HttpClient.post(`${environment.apiUrl}/Reservation/Add`, Data)
  }
  GetAllUserReservations(){
    return this.HttpClient.get<UserReservation[]>(`${environment.apiUrl}/Reservation/GetAllByUserId`)
  }
  GetUserReservationsByStatus(Status:string){
    return this.HttpClient.get<UserReservation[]>(`${environment.apiUrl}/Reservation/GetUserReservationsByStatus/${Status}`)
  }
  GetVendorReservationsByStatus(Status:string){
    return this.HttpClient.get<VendorReservation[]>(`${environment.apiUrl}/Reservation/GetVendorReservationsByStatus/${Status}`)
  }
}
