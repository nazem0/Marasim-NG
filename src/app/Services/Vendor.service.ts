import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IVendor } from '../Models/IVendor';
import { Observable, forkJoin } from 'rxjs';
import { IUser } from '../Models/IUser';

@Injectable({
    providedIn: 'root'
})
export class VendorService {
    constructor(private http: HttpClient) {
    }
    
    public getVendorWithUser(vendorId: number, userId: number): Observable<[IVendor,IUser]> {
        let response1 = this.http.get<IVendor>(`http://localhost:3000/Vendor/${vendorId}`);
        let response2 = this.http.get<IUser>(`http://localhost:3000/User/${userId}`);
        console.log("response 1 :  " + response1 + "\n response 2 :  " +response2)
        return forkJoin([response1, response2]);
      }



    get() {
        return this.http.get<IVendor[]>("http://localhost:3000/Vendor/")
    }
    getByID(ID: number | null = null): Observable<IVendor> {
        if (ID) {
            return this.http.get<IVendor>(`http://localhost:3000/Vendor/${ID}`)
        }
        else {
            throw "Check ID";
        }
    }

}
