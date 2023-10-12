import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IReview } from '../Models/IReview';

@Injectable({ providedIn: 'root' })
export class ReviewService {
  constructor(private httpClient: HttpClient) { }

  get():Observable<IReview[]> {
    return this.httpClient.get<IReview[]>("http://localhost:3000/reviews")
  }

  getByUserID(ID:number):Observable<IReview[]>
  {
    if(ID){
      return this.httpClient.get<IReview[]>(`http://localhost:3000/reviews/?userId=${ID}`)
    }
    else{
      throw "No Reviews";
    }
  }
}



