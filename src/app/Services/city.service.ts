import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { City } from '../Models/City';
@Injectable({
  providedIn: 'root'
})
export class CityService {
  controllerName = "City"
  constructor(private HttpClient:HttpClient) { }
  public getByGovId(govId:string){
    return this.HttpClient.get<City[]>(`${environment.apiUrl}/${this.controllerName}/getByGovId/${govId}`);
  }
}
