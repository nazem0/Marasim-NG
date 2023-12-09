import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private HttpClient: HttpClient) { }
  getCompletedOrdersStats(){
    return this.HttpClient.get(`${environment.apiUrl}/Reservation/GetTotalOrder`)
  }


  getTotalSalesStats(){
    return this.HttpClient.get(`${environment.apiUrl}/Reservation/GetTotalSales`)
  }

  getOurTotalProfits(Year:number | string){
    return this.HttpClient.get(`${environment.apiUrl}/Payment/GetOurTotalProfits/${Year}`)
  }

}
