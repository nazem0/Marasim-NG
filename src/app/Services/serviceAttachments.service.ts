import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IServiceAttachment, IServiceAttachmentCustom } from '../Models/IService';

@Injectable({
  providedIn: 'root'
})
export class ServiceAttachmentService {
  constructor(private HttpClient: HttpClient) { }

  // GetAll(): Observable<IServiceAttachment[]> {
  //   return this.HttpClient.get<IServiceAttachment[]>(`${environment.apiUrl}/ServiceAttachment/GetAllActive`)
  // }

  GetByVendorId(VendorId: number): Observable<IServiceAttachmentCustom[]> {
    return this.HttpClient.get<IServiceAttachmentCustom[]>(`${environment.apiUrl}/ServiceAttachment/GetByVendorId/${VendorId}`)
  }

  GetAllCustom(): Observable<IServiceAttachmentCustom[]> {
    return this.HttpClient.get<IServiceAttachmentCustom[]>(`${environment.apiUrl}/ServiceAttachment/GetAllCustom/`)
  }

  getByServiceId(serviceId:number){
    return this.HttpClient.get<IServiceAttachmentCustom[]>(`${environment.apiUrl}/ServiceAttachment/GetByServiceId/${serviceId}`)
  }
  add(data:FormData){
    return this.HttpClient.post(`${environment.apiUrl}/ServiceAttachment/Add`,data)
  }
  delete(attachmentId:string|number){
    return this.HttpClient.delete(`${environment.apiUrl}/ServiceAttachment/Delete/${attachmentId}`)
  }

  getUrl(attachment:IServiceAttachmentCustom){
    return `${environment.serverUrl}/${attachment.userId}/serviceAttachment/${attachment.serviceId}-${attachment.vendorId}/${attachment.attachmentUrl}`
  }
}
