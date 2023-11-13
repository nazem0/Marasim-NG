import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Governorate } from '../Models/governorate';

@Injectable({
  providedIn: 'root',
})
export class GovernorateService {
  controller = 'governorate';
  constructor(private HttpClient: HttpClient) {}
  public get() {
    return this.HttpClient.get<Governorate[]>(`${environment.apiUrl}/${this.controller}/get`);
  }
}
