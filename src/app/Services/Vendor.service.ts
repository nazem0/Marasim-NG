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
  constructor(private HttpClient: HttpClient) {}

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
  /*
            int PageSize = 5,
            int? CategoryId = null,
            int? GovernorateId = null,
            int? CityId = null,
            string? Name = null,
            string? District = null
    */
  filterVendors(
    pageIndex = 1,
    CategoryId: number | null = null,
    GovernorateId: number | null = null,
    CityId: number | null = null,
    Name: string | null = null,
    District: string | null = null,
    PageSize: number | null = 8
  ): Observable<PaginationViewModel<IVendorMidInfo>> {
    let queryParams: string[] | string = [];
    if(Name) queryParams.push(`Name=${Name}`)
    if (CategoryId) queryParams.push(`CategoryId=${CategoryId}`);
    if (GovernorateId) queryParams.push(`GovernorateId=${GovernorateId}`);
    if (CityId) queryParams.push(`CityId=${CityId}`);
    if (District) queryParams.push(`District=${District}`);
    if (PageSize) queryParams.push(`PageSize=${PageSize}`);
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
