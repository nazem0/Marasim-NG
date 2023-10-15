import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory, ICategoryWithVendors } from '../Models/ICategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  get(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>("http://localhost:3000/categories")
  }

  getVendorsByCategoryID(ID: number): Observable<ICategoryWithVendors> {
    return this.http.get<ICategoryWithVendors>(`http://localhost:3000/categories/${ID}?_embed=vendors`)
  }
}
