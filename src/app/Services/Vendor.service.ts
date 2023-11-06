import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IVendor } from '../Models/IVendor';
import { Observable, forkJoin } from 'rxjs';
import { IUser } from '../Models/IUser';
import { IService } from '../Models/IService';
import { IServiceAttachment } from '../Models/IServiceAttachment';
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
    GetByVendorId(VendorID: number): Observable<FullVendorInfo>{
        return this.HttpClient.get<FullVendorInfo>(`${environment.apiUrl}/Vendor/GetVendorByID/${VendorID}`)
    }


    // What is this doing here??? services??? Move to Service.service.ts
    getServices(ID: Number): Observable<IService[]> {
        return this.HttpClient.get<IService[]>(`${environment.apiUrl}/service/GetByVendorId/${ID}`)
    }
    getServicesByVendorId(Id:number){
        return this.HttpClient.get<IService[]>(`${environment.apiUrl}/service/GetByVendorId/${Id}`)
    }
}
