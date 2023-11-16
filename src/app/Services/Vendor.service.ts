import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IVendor, IVendorMidInfo } from '../Models/IVendor';
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
    GetByVendorId(vendorId: number): Observable<IVendor> {
        return this.HttpClient.get<IVendor>(`${environment.apiUrl}/Vendor/GetVendorById/${vendorId}`)
    }

    GetVendorByUserId(userId: string): Observable<IVendor> {
        return this.HttpClient.get<IVendor>(`${environment.apiUrl}/Vendor/GetVendorByUserId/${userId}`)
    }

    GetIntOfVendors(numOfVendors: number = 5): Observable<IVendorMidInfo[]> {
        return this.HttpClient.get<IVendorMidInfo[]>(`${environment.apiUrl}/Vendor/GetIntOfVendors/${numOfVendors}`)
    }

    GetVendorsMidInfo(): Observable<IVendorMidInfo[]> {
        return this.HttpClient.get<IVendorMidInfo[]>(`${environment.apiUrl}/Vendor/GetVendorsMidInfo`)
    }

    GetVendorFullFull(vendorId: number): Observable<FullVendorInfo> {
        return this.HttpClient.get<FullVendorInfo>(`${environment.apiUrl}/Vendor/GetVendorFullFull/${vendorId}`)
    }

    UpdateVendor(updateData: any) {
        return this.HttpClient.put(`${environment.apiUrl}/Vendor/Update`, updateData)
    }
}
