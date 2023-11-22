import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IVendor, IVendorMidInfo, address} from '../Models/IVendor';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { FullVendorInfo } from '../Models/FullVendorInfo';
import { PaginationViewModel } from '../Models/PaginationViewModel';

@Injectable({
  providedIn: 'root',
})
export class VendorService {
  constructor(private HttpClient: HttpClient) { }

  GetAll(PageIndex: number, PageSize: number): Observable<PaginationViewModel<IVendorMidInfo>> {
    return this.HttpClient.get<PaginationViewModel<IVendorMidInfo>>(`${environment.apiUrl}/Vendor/GetAll?PageSize=${PageSize}&PageIndex=${PageIndex}`);
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
    vendorFilterForm: VendorFilterForm | null = null
  ): Observable<PaginationViewModel<IVendorMidInfo>> {
    console.log(vendorFilterForm);
    let queryParams: string[] | string = [];
    if (vendorFilterForm) {
      if (vendorFilterForm.name) queryParams.push(`Name=${vendorFilterForm.name}`);

      if (vendorFilterForm.categories) queryParams.push(`Categories=${vendorFilterForm.categories}`);

      if (vendorFilterForm.governorateId) queryParams.push(`GovernorateId=${vendorFilterForm.governorateId}`);
      if (vendorFilterForm.cityId) queryParams.push(`CityId=${vendorFilterForm.cityId}`);
      if (vendorFilterForm.district) queryParams.push(`District=${vendorFilterForm.district}`);
      if (vendorFilterForm.pageSize) queryParams.push(`PageSize=${vendorFilterForm.pageSize}`);
      if (vendorFilterForm.rate) queryParams.push(`Rate=${vendorFilterForm.rate}`);
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

export interface VendorFilterForm {
  pageSize?: number;
  categories?: string;
  governorateId?: number | null;
  cityId?: number | null;
  name?: string | null;
  district?: string | null;
  rate?: string | null;
}