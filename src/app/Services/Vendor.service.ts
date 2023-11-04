import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IVendor } from '../Models/IVendor';
import { Observable, forkJoin } from 'rxjs';
import { IUser } from '../Models/IUser';
import { IService } from '../Models/IService';
import { IServiceAttachment } from '../Models/IServiceAttachment';
import { environment } from 'src/environments/environment.development';

@Injectable({
    providedIn: 'root'
})
export class VendorService {
    constructor(private http: HttpClient, private CookieService:CookieService) {
    }
    public getVendorWithUser(vendorId: number, userId: number): Observable<[IVendor, IUser]> {
        return forkJoin
            ([
                this.http.get<IVendor>(`http://localhost:3000/vendors/${vendorId}`),
                this.http.get<IUser>(`http://localhost:3000/users/${userId}`)
            ]);
    }
    get() {
        return this.http.get<IVendor[]>("http://localhost:3000/vendors/")
    }
    getByID(ID: number): Observable<IVendor> {
        if (ID) {
            return this.http.get<IVendor>(`http://localhost:3000/vendors/${ID}`)
        }
        else {
            throw "Check ID";
        }
    }
    getServices(ID: Number): Observable<IService[]> {
        return this.http.get<IService[]>(`${environment.apiUrl}/service/GetByVendorId/${ID}`)
    }
    getServicesByVendorId(Id:number){
        return this.http.get<IService[]>(`${environment.apiUrl}/service/GetByVendorId/${Id}`)
    }
}
