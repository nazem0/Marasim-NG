import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory, ICategoryWithVendors } from '../Models/ICategory';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  get(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${environment.apiUrl}/`)
  }

  getVendorsByCategoryID(ID: number): Observable<ICategoryWithVendors> {
    return this.http.get<ICategoryWithVendors>(`http://localhost:3000/categories/${ID}?_embed=vendors`)
  }
}
