import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IVendor } from '../Models/IVendor';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { FullVendorInfo } from '../Models/FullVendorInfo';

@Injectable({
    providedIn: 'root'
})
export class VendorService {
    constructor(private HttpClient: HttpClient) {
    }


    GetAll() {
        return this.HttpClient.get(`${environment.apiUrl}/Vendor/GetAll`)
    }
    GetByVendorId(VendorID: number): Observable<IVendor> {
        return this.HttpClient.get<IVendor>(`${environment.apiUrl}/Vendor/GetVendorByID/${VendorID}`)
    }

    GetVendorByUserId(UserId: string): Observable<IVendor> {
        return this.HttpClient.get<IVendor>(`${environment.apiUrl}/Vendor/GetVendorByUserId/${UserId}`)
    }

    GetVendorFullFull(VendorID: number): Observable<FullVendorInfo> {
        return this.HttpClient.get<FullVendorInfo>(`${environment.apiUrl}/Vendor/GetVendorFullFull/${VendorID}`)
    }

    UpdateVendor(updateData: any): Observable<any> {
        for (const value of updateData.values()) {
            console.log(value);
          }
        return this.HttpClient.put(`${environment.apiUrl}/Vendor/Update`, updateData)
    }



    // // What is this doing here??? services??? Move to Service.service.ts
    // getServices(ID: Number): Observable<IService[]> {
    //     return this.HttpClient.get<IService[]>(`${environment.apiUrl}/service/GetByVendorId/${ID}`)
    // }
    // getServicesByVendorId(Id:number){
    //     return this.HttpClient.get<IService[]>(`${environment.apiUrl}/service/GetByVendorId/${Id}`)
    // }
}
