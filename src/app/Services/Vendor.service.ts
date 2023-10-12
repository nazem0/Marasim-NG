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

    public getVendorWithUser(vendorId: number, userId: number): Observable<[IVendor, IUser]> {
        return forkJoin
            ([
                this.http.get<IVendor>(`http://localhost:3000/Vendor/${vendorId}`),
                this.http.get<IUser>(`http://localhost:3000/User/${userId}`)
            ]);
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
