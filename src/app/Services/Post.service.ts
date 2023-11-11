import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IComment, IPost, IReaction } from '../Models/IPost';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class PostService {
  constructor(private HttpClient: HttpClient) { }

  //Posts Requests

  Add(Post: any) {
    return this.HttpClient.post(`${environment.apiUrl}/Post/Add`, Post)
  }

  Update(Post: any, PostId: number) {
    return this.HttpClient.put(`${environment.apiUrl}/Post/Update/${PostId}`, Post)
  }

  Delete(PostId: number) {
    return this.HttpClient.delete(`${environment.apiUrl}/Post/Delete/${PostId}`)
  }

  Get(): Observable<IPost[]> {
    return this.HttpClient.get<IPost[]>(`${environment.apiUrl}/Post/Get`)
  }

  GetByVendorId(VendorId: number): Observable<IPost[]> {
    return this.HttpClient.get<IPost[]>(`${environment.apiUrl}/Post/GetByVendorId/${VendorId}`)
  }

  //Reacts Requests

  GetReactsByPostId(postId: number): Observable<IReaction[]> {
    return this.HttpClient.get<IReaction[]>(`${environment.apiUrl}/React/GetReactsByPostId/${postId}`)
  }

  IsLiked(postId: number): Observable<boolean> {
    return this.HttpClient.get<boolean>(`${environment.apiUrl}/React/GetIsLiked/${postId}`)
  }

  AddReact(PostId: number) {
    const data = { PostId: PostId };
    return this.HttpClient.post(`${environment.apiUrl}/React/Add/`, PostId)
  }

  DeleteReact(postId: number) {
    return this.HttpClient.delete(`${environment.apiUrl}/React/Delete/${postId}`)
  }


  //Comments Requests


  GetCommentsByPostId(postId: number): Observable<IComment[]> {
    return this.HttpClient.get<IComment[]>(`${environment.apiUrl}/Comment/GetCommentsByPostId/${postId}`)
  }

  AddComment(Comment: any) {
    return this.HttpClient.post(`${environment.apiUrl}/Comment/Add`, Comment)
  }
}



