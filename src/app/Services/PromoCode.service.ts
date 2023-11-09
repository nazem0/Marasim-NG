import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PromoCodeservice {

  constructor(private HttpClient:HttpClient) { }
 
  Add(Promocode:any){
    console.log(Promocode);
    return this.HttpClient.post(`${environment.apiUrl}/promocode/add`,Promocode)
  }
 
  Delete(ServiceID:number){
    return this.HttpClient.delete(`${environment.apiUrl}/promocode/delete/${ServiceID}`);
  }
}
