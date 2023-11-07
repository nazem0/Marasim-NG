import { AddReservation } from './../Models/AddReservation';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private HttpClient:HttpClient) { }
  addReservation(Data:AddReservation){
  return this.HttpClient.post(`${environment.apiUrl}/Reservation/Add`,Data)
  }
}
