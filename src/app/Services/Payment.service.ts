import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Payment, VendorPayment } from '../Models/Payment';
import { PaginationViewModel } from '../Models/PaginationViewModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private HttpClient: HttpClient) { }
  Get(): Observable<Payment[]> {
    return this.HttpClient.get<Payment[]>(`${environment.apiUrl}/Payment/Get/`)
  }
  Count(): Observable<number> {
    return this.HttpClient.get<number>(`${environment.apiUrl}/Payment/Count`)
  }
  GetUnconfirmed(): Observable<Payment[]> {
    return this.HttpClient.get<Payment[]>(`${environment.apiUrl}/Payment/GetUnconfirmed/`)
  }
  GetConfirmed(): Observable<Payment[]> {
    return this.HttpClient.get<Payment[]>(`${environment.apiUrl}/Payment/GetConfirmed/`)
  }
  Add(Data: any) {
    return this.HttpClient.post(`${environment.apiUrl}/Payment/Add/`, Data)
  }
  GetVendorPayments(PageIndex = 1,PageSize =2): Observable<PaginationViewModel<VendorPayment>> {
    return this.HttpClient.get<PaginationViewModel<VendorPayment>>(`${environment.apiUrl}/payment/GetVendorsPayments/${PageIndex}?PageSize=${PageSize}`)
  }
  GetVendorBalance(): Observable<number> {
    return this.HttpClient.get<number>(`${environment.apiUrl}/Payment/GetVendorBalance`)
  }
}
