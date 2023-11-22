import { VendorReservation, CheckoutReservation } from './../Models/Reservation';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { UserReservation } from '../Models/Reservation';
import { Observable } from 'rxjs';
import { PaginationViewModel } from '../Models/PaginationViewModel';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  constructor(private HttpClient: HttpClient) { }

  Add(Data: any) {
    return this.HttpClient.post(`${environment.apiUrl}/Reservation/Add`, Data)
  }

  GetAllForUser() {
    return this.HttpClient.get<UserReservation[]>(`${environment.apiUrl}/Reservation/GetAllByUserId`)
  }
  GetAllForVendor() {
    return this.HttpClient.get<VendorReservation[]>(`${environment.apiUrl}/Reservation/GetAllVendorReservations`)
  }

  GetForUserByStatus(Status: string) {
    return this.HttpClient.get<PaginationViewModel<UserReservation>>(`${environment.apiUrl}/Reservation/GetUserReservationsByStatus/1?Status=${Status}`)
  }
  GetForVendorByStatus(Status: string) {
    return this.HttpClient.get<PaginationViewModel<VendorReservation>>(`${environment.apiUrl}/Reservation/GetVendorReservationsByStatus/1?Status=${Status}`)
  }

  CheckoutById(Id: number) {
    return this.HttpClient.get<CheckoutReservation>(`${environment.apiUrl}/Reservation/CheckoutReservationById/${Id}`)
  }

  Accept(Data: any) {
    return this.HttpClient.put<VendorReservation>(`${environment.apiUrl}/Reservation/Accept`, Data)
  }
  Reject(Data: any) {
    return this.HttpClient.put<VendorReservation>(`${environment.apiUrl}/Reservation/Reject`, Data)
  }
  Confirm(ReservationId: number) {
    return this.HttpClient.get(`${environment.apiUrl}/Reservation/Confirm/${ReservationId}`)
  }
  Done(Data: any) {
    return this.HttpClient.put(`${environment.apiUrl}/Reservation/Done`, Data)
  }
}
