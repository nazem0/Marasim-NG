import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private HttpClient:HttpClient) { }
  Add(Data:any){
    return this.HttpClient.post(`${environment.apiUrl}/Payment/Add/`,Data)
  }
}
