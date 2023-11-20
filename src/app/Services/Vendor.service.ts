import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IVendor, IVendorMidInfo, address } from '../Models/IVendor';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { FullVendorInfo } from '../Models/FullVendorInfo';
import { PaginationViewModel } from '../Models/PaginationViewModel';

@Injectable({
  providedIn: 'root',
})
export class VendorService {
  constructor(private HttpClient: HttpClient) { }

  GetAll() {
    return this.HttpClient.get(`${environment.apiUrl}/Vendor/GetAll`);
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
    FormModel: FormModel | null = null
  ): Observable<PaginationViewModel<IVendorMidInfo>> {
    let queryParams: string[] | string = [];
    if (FormModel) {
      if (FormModel.Name) queryParams.push(`Name=${FormModel.Name}`)
      if (FormModel.Categories?.length>0) queryParams.push(`Categories=${FormModel.Categories.join()}`);
      if (FormModel.GovernorateId) queryParams.push(`GovernorateId=${FormModel.GovernorateId}`);
      if (FormModel.CityId) queryParams.push(`CityId=${FormModel.CityId}`);
      if (FormModel.District) queryParams.push(`District=${FormModel.District}`);
      if (FormModel.PageSize) queryParams.push(`PageSize=${FormModel.PageSize}`);
    }
    queryParams = queryParams.join("&")
    return this.HttpClient.get<PaginationViewModel<IVendorMidInfo>>(
      `${environment.apiUrl}/Vendor/Filter/${pageIndex}?${queryParams}`
    );
  }
  getVendorAddress(address: address) {
    if (address.street)
      return `${address.street}, ${address.district}, ${address.city}, ${address.governorate}`;

    return `${address.district}, ${address.city}, ${address.governorate}`;
  }
}

export interface FormModel {
  PageSize: number;
  Categories: number[];
  GovernorateId: number | null;
  CityId: number | null;
  Name: string | null;
  District: string | null;
}