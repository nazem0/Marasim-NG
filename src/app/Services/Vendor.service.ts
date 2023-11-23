import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IVendor, IVendorMidInfo, address } from '../Models/IVendor';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { FullVendorInfo } from '../Models/FullVendorInfo';
import { PaginationViewModel } from '../Models/PaginationViewModel';
import { ParamMap } from '@angular/router';
import { param } from 'jquery';

@Injectable({
  providedIn: 'root',
})
export class VendorService {
  constructor(private HttpClient: HttpClient) { }

  GetAll(PageIndex: number, PageSize: number): Observable<PaginationViewModel<IVendorMidInfo>> {
    return this.HttpClient.get<PaginationViewModel<IVendorMidInfo>>(`${environment.apiUrl}/Vendor/GetAll?PageSize=${PageSize}&PageIndex=${PageIndex}`);
  }

  Count(): Observable<number> {
    return this.HttpClient.get<number>(`${environment.apiUrl}/Vendor/Count`)
  }

  GetByVendorId(vendorId: number): Observable<IVendor> {
    return this.HttpClient.get<IVendor>(
      `${environment.apiUrl}/Vendor/GetVendorById/${vendorId}`
    );
  }

  GetVendorByUserId(userId: string): Observable<IVendor> {
    return this.HttpClient.get<IVendor>(
      `${environment.apiUrl}/Vendor/GetVendorByUserId/${userId}`
    );
  }

  GetIntOfVendors(numOfVendors: number = 5): Observable<IVendorMidInfo[]> {
    return this.HttpClient.get<IVendorMidInfo[]>(
      `${environment.apiUrl}/Vendor/GetIntOfVendors/${numOfVendors}`
    );
  }

  GetVendorsMidInfo(): Observable<IVendorMidInfo[]> {
    return this.HttpClient.get<IVendorMidInfo[]>(
      `${environment.apiUrl}/Vendor/GetVendorsMidInfo`
    );
  }

  GetVendorFullFull(vendorId: number): Observable<FullVendorInfo> {
    return this.HttpClient.get<FullVendorInfo>(
      `${environment.apiUrl}/Vendor/GetVendorFullFull/${vendorId}`
    );
  }

  UpdateVendor(updateData: any) {
    return this.HttpClient.put(
      `${environment.apiUrl}/Vendor/Update`,
      updateData
    );
  }

  filterVendors(
    pageIndex = 1,
    pageSize = 4,
    params: ParamMap | null = null
  ): Observable<PaginationViewModel<IVendorMidInfo>> {
    let queryParams: string[] | string = [];
    if (params) {
      let name = params.get("name")
      let categories = params.get("categories")
      let governorateId = params.get("governorateId")
      let cityId = params.get("cityId")
      let district = params.get("district");
      let rate = params.get("rate");
      if (name) queryParams.push(`Name=${name}`);
      if (categories) queryParams.push(`Categories=${categories}`);
      if (governorateId) queryParams.push(`GovernorateId=${governorateId}`);
      if (cityId) queryParams.push(`CityId=${cityId}`);
      if (district) queryParams.push(`District=${district}`);
      if (rate) queryParams.push(`Rate=${rate}`);
    }
    queryParams = queryParams.join("&")
    return this.HttpClient.get<PaginationViewModel<IVendorMidInfo>>(
      `${environment.apiUrl}/Vendor/Filter/${pageIndex}?pageSize=${pageSize}&${queryParams}`
    );
  }
  getVendorAddress(address: address) {
    if (address.street)
      return `${address.street}, ${address.district}, ${address.city}, ${address.governorate}`;

    return `${address.district}, ${address.city}, ${address.governorate}`;
  }
}

export interface VendorFilterForm {
  pageSize?: number;
  categories?: string;
  governorateId?: number | null;
  cityId?: number | null;
  name?: string | null;
  district?: string | null;
  rate?: string | null;
}