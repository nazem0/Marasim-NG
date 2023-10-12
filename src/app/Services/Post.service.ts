import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAttachment, IComment, IPost, IReaction } from '../Models/IPost';

@Injectable({ providedIn: 'root' })
export class PostService {
  constructor(private httpClient: HttpClient) { }

  get():Observable<IPost[]> {
    return this.httpClient.get<IPost[]>("http://localhost:3000/posts")
  }
  getAttachments(postID:number):Observable<IAttachment[]>{
    return this.httpClient.get<IAttachment[]>(`http://localhost:3000/post/${postID}/postAttachments`)
  }
  getReacts(postID:number):Observable<IReaction[]>{
    return this.httpClient.get<IReaction[]>(`http://localhost:3000/post/${postID}/reacts`)
  }
  getComments(postID:number):Observable<IComment[]>{
    return this.httpClient.get<IComment[]>(`http://localhost:3000/post/${postID}/comments`)
  }
}



