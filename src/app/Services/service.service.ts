import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private HttpClient:HttpClient) { }
  AddService(Service:any){
    return this.HttpClient.post(`${environment.apiUrl}/service/add`,Service)
  }
}
