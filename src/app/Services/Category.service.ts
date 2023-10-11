import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../Models/ICategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

constructor(private http:HttpClient) {}
get():Observable<ICategory[]>{
  return this.http.get<ICategory[]>("http://localhost:3000/Category")
}

}
