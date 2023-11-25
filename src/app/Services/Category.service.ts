import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryWithMinMaxViewModel, CategoryName, ICategory } from '../Models/ICategory';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categoriesPictures = [
    {
      categoryId: 1,
      picUrl: "/assets/img/photo_session.webp"
    },
    {
      categoryId: 2,
      picUrl: "/assets/img/photo_session.webp"
    },
    {
      categoryId: 3,
      picUrl: "/assets/img/photo_session.webp"
    },
    {
      categoryId: 4,
      picUrl: "/assets/img/photo_session.webp"
    },
    {
      categoryId: 5,
      picUrl: "/assets/img/chefs.webp"
    },
    {
      categoryId: 6,
      picUrl: "/assets/img/photo_session.webp"
    },
    {
      categoryId: 7,
      picUrl: "/assets/img/photo_session.webp"
    },
    {
      categoryId: 8,
      picUrl: "/assets/img/photo_session.webp"
    }
  ]
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
  getCategoryPicture(categoryId: number) {
    let picUrl = this.categoriesPictures.find(cat => cat.categoryId == categoryId)?.picUrl
    if (picUrl)
      return picUrl
    else
      return "/assets/img/wedding-boom.jpg"
  }
  GetCategoriesWithMinMax():Observable<CategoryWithMinMaxViewModel[]>{
    return this.HttpClient.get<CategoryWithMinMaxViewModel[]>(`${environment.apiUrl}/Category/GetCategoriesWithMinMax`)
  }
}
