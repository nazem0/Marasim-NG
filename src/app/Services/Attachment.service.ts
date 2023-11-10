import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IServiceAttachment, IServiceAttachmentCustom } from '../Models/IService';

@Injectable({
  providedIn: 'root'
})
export class AttachmentService {
  constructor(private HttpClient: HttpClient) { }

  GetAll(): Observable<IServiceAttachment[]> {
    return this.HttpClient.get<IServiceAttachment[]>(`${environment.apiUrl}/ServiceAttachment/GetAllActive`)
  }

  GetByVendorId(VendorId: number): Observable<IServiceAttachment[]> {
    return this.HttpClient.get<IServiceAttachment[]>(`${environment.apiUrl}/ServiceAttachment/GetByVendorId/${VendorId}`)
  }

  GetAllCustom(): Observable<IServiceAttachmentCustom[]> {
    return this.HttpClient.get<IServiceAttachmentCustom[]>(`${environment.apiUrl}/ServiceAttachment/GetAllCustom/`)
  }

}
