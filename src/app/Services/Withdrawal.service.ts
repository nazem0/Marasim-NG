import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { PaginationViewModel } from '../Models/PaginationViewModel';
import { Withdrawal } from '../Models/Withdrawal';

@Injectable({
    providedIn: 'root'
})
export class WithdrawalService {

    constructor(private HttpClient: HttpClient) { }

    //   GetById(): Observable<Withdrawal> {
    //     return this.HttpClient.get<Withdrawal>(`${environment.apiUrl}/Withdrawal/Get/`)
    //   }

    Add(Data: any) {
        return this.HttpClient.post(`${environment.apiUrl}/Withdrawal/Add/`, Data)
    }

    GetAll(PageIndex = 1, PageSize = 2): Observable<PaginationViewModel<Withdrawal>> {
        return this.HttpClient.get<PaginationViewModel<Withdrawal>>(`${environment.apiUrl}/Withdrawal/GetWithdrawals/${PageIndex}?PageSize=${PageSize}`)
    }

}
