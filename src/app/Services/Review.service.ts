import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { IReview } from '../Models/IReview';
import { IVendor } from '../Models/IVendor';
import { IUser } from '../Models/IUser';

@Injectable({ providedIn: 'root' })
export class ReviewService {
  constructor(private http: HttpClient) { }

  get():Observable<IReview[]> {
    return this.http.get<IReview[]>("http://localhost:3000/reviews")
  }

  getByUserID(ID:number):Observable<IReview[]>
  {
    if(ID){
      return this.http.get<IReview[]>(`http://localhost:3000/reviews/?userId=${ID}`)
    }
    else{
      throw "No Reviews";
    }
  }
}



