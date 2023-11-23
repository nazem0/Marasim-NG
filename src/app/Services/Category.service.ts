import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../Models/ICategory';
import { environment } from 'src/environments/environment.development';
import { CategoryName } from '../Models/CategoryName';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private HttpClient: HttpClient) { }
  GetAll(): Observable<ICategory[]> {
    return this.HttpClient.get<ICategory[]>(`${environment.apiUrl}/Category/GetAll`)
  }

  GetById(categoryId: number): Observable<ICategory> {
    return this.HttpClient.get<ICategory>(`${environment.apiUrl}/Category/GetById/${categoryId}`)
  }

  GetByVendorId(vendorId: number): Observable<ICategory> {
    return this.HttpClient.get<ICategory>(`${environment.apiUrl}/Category/GetByVendorId/${vendorId}`)
  }

  GetNames(): Observable<CategoryName[]> {
    return this.HttpClient.get<CategoryName[]>(`${environment.apiUrl}/Category/GetNames`)
  }

  Count(): Observable<number> {
    return this.HttpClient.get<number>(`${environment.apiUrl}/Category/Count`)
  }

  AddCategory(Category: any) {
    return this.HttpClient.post(`${environment.apiUrl}/Category/Add`, Category)
  }
}
