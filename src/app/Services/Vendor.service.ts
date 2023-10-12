import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IVendor } from '../Models/IVendor';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class VendorService {
    constructor(private http: HttpClient) {
    }
    
    public getVendorWithUser(vendorID: number): Observable<any[]> {
        let response1 = this.http.get(`http://localhost:3000/Vendor/${vendorID}`);
        let response2 = this.http.get(`http://localhost:3000/User/${ID}`);
        // Observable.forkJoin (RxJS 5) changes to just forkJoin() in RxJS 6
        
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
