import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { IReview, ReviewList } from '../Models/IReview';
import { IVendor } from '../Models/IVendor';
import { IUser } from '../Models/IUser';
import { environment } from 'src/environments/environment.development';

@Injectable({ providedIn: 'root' })
export class ReviewService {
  constructor(private HttpClient: HttpClient) { }

  Get(): Observable<IReview[]> {
    return this.HttpClient.get<IReview[]>(`${environment.apiUrl}/Review/Get`)
  }

  GetByVendorId(VendorId: number): Observable<IReview[]> {
    return this.HttpClient.get<IReview[]>(`${environment.apiUrl}/Review/GetByVendorId/${VendorId}`)
  }

  GetPagedReviewsByVendorId(VendorId: number, PageIndex: number, PageSize: number): Observable<ReviewList> {
    return this.HttpClient.get<ReviewList>(`${environment.apiUrl}/Review/GetPagedReviewsByVendorId/${VendorId}?PageSize=${PageSize}&PageIndex=${PageIndex}`)
  }

  GetAverageRate(VendorId: number): Observable<number> {
    return this.HttpClient.get<number>(`${environment.apiUrl}/Review/GetAverageRate/${VendorId}`)
  }

  Add(Review: any){
    return this.HttpClient.post(`${environment.apiUrl}/Review/Add`, Review)
  }

  Update(Review: any, ReviewId: number){
    return this.HttpClient.put(`${environment.apiUrl}/Review/Update/${ReviewId}`, Review)
  }

  Delete(ReviewId: number){
    return this.HttpClient.delete(`${environment.apiUrl}/Review/Delete/${ReviewId}`)
  }

  HasReviews(ReviewId:number){
    return this.HttpClient.get(`${environment.apiUrl}/Review/HasReviews/${ReviewId}`)
  }
}



