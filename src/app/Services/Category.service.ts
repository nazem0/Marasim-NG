import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryWithMinMaxViewModel, CategoryName, ICategory } from '../Models/ICategory';
import { environment } from 'src/environments/environment.development';
import { CategoryId } from '../Enums/categoryId';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  
categoriesPictures = [
  {
    categoryId: CategoryId._1hall,
    picUrl: "/assets/img/Categories/Hall.webp"
  },
  {
    categoryId: CategoryId._2islamicWeddingHall,
    picUrl: "/assets/img/Categories/IslamicWeddingHall.jpg"
  },
  {
    categoryId: CategoryId._3club,
    picUrl: "/assets/img/Categories/Club.webp"
  },
  {
    categoryId: CategoryId._4photographer,
    picUrl: "/assets/img/Categories/Photographer.jpg"
  },
  {
    categoryId: CategoryId._5restaurant,
    picUrl: "/assets/img/Categories/Restaurant.webp"
  },
  {
    categoryId: CategoryId._6beautySalon,
    picUrl: "/assets/img/Categories/BeautySalon.jpg"
  },
  {
    categoryId: CategoryId._7hairdresserMale,
    picUrl: "/assets/img/Categories/Hall.webp"
  },
  {
    categoryId: CategoryId._8hairdresserFemale,
    picUrl: "/assets/img/Categories/HairdresserFemale.webp"
  }
]
constructor(private HttpClient: HttpClient) { }
GetAll(): Observable < ICategory[] > {
  return this.HttpClient.get<ICategory[]>(`${environment.apiUrl}/Category/GetAll`)
}

GetById(categoryId: number): Observable < ICategory > {
  return this.HttpClient.get<ICategory>(`${environment.apiUrl}/Category/GetById/${categoryId}`)
}

GetByVendorId(vendorId: number): Observable < ICategory > {
  return this.HttpClient.get<ICategory>(`${environment.apiUrl}/Category/GetByVendorId/${vendorId}`)
}

GetNames(): Observable < CategoryName[] > {
  return this.HttpClient.get<CategoryName[]>(`${environment.apiUrl}/Category/GetNames`)
}


Count(): Observable < number > {
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
GetCategoriesWithMinMax(): Observable < CategoryWithMinMaxViewModel[] > {
  return this.HttpClient.get<CategoryWithMinMaxViewModel[]>(`${environment.apiUrl}/Category/GetCategoriesWithMinMax`)
}
}
