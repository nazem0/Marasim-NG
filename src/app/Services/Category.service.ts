import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../Models/ICategory';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  GetAll(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${environment.apiUrl}/Category/GetAll`)
  }

  GetById(categoryId : number ): Observable<ICategory> {
    return this.http.get<ICategory>(`${environment.apiUrl}/Category/GetById/${categoryId}`)
  }
}
