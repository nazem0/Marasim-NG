import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { IService } from '../Models/IService';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private HttpClient: HttpClient) { }
  GetAll() {
    return this.HttpClient.get(`${environment.apiUrl}/Service/GetAll`)
  }
  GetById(Id: number): Observable<IService> {
    return this.HttpClient.get<IService>(`${environment.apiUrl}/Service/GetById/${Id}`)
  }
  GetServicesByVendorId(Id: number): Observable<IService[]> {
    return this.HttpClient.get<IService[]>(`${environment.apiUrl}/Service/GetByVendorId/${Id}`)
  }
  AddService(Service: any) {
    return this.HttpClient.post(`${environment.apiUrl}/Service/Add`, Service)
  }
  UpdateService(Service: any, ServiceId : number) {
    return this.HttpClient.put(`${environment.apiUrl}/Service/Update/${ServiceId}`, Service)
  }
  DeleteService(Id: number) {
    return this.HttpClient.delete(`${environment.apiUrl}/Service/Delete/${Id}`);
  }
}
