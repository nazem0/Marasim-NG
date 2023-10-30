import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private HttpClient:HttpClient) { }
  GetAll(){
    return this.HttpClient.get(`${environment.apiUrl}/service/getall`)
  }
  GetById(Id:number){
    return this.HttpClient.post(`${environment.apiUrl}/service/getbyid`,Id)
  }
  GetByVendorId(Id:number){
    return this.HttpClient.post(`${environment.apiUrl}/service/getbyvendorid`,Id)
  }
  AddService(Service:any){
    return this.HttpClient.post(`${environment.apiUrl}/service/add`,Service)
  }
  UpdateService(Service:any){
    return this.HttpClient.post(`${environment.apiUrl}/service/update`,Service)
  }
  DeleteService(Id:number){
    return this.HttpClient.delete(`${environment.apiUrl}/service/delete/${Id}`);
  }
}
