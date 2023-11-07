import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPostAttachment, IComment, IPost, IReaction } from '../Models/IPost';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class PostService {
  constructor(private HttpClient: HttpClient) { }

  //Posts Requests

  Add(Post: any) {
    return this.HttpClient.post(`${environment.apiUrl}/Post/Add`, Post)
  }

  Update(Post: any, PostID: number) {
    return this.HttpClient.post(`${environment.apiUrl}/Post/Update?PostID=${PostID}`, Post)
  }

  Delete(PostID: number) {
    return this.HttpClient.delete(`${environment.apiUrl}/Post/Delete?PostID=${PostID}`)
  }

  Get(): Observable<IPost[]> {
    return this.HttpClient.get<IPost[]>(`${environment.apiUrl}/Post/Get`)
  }

  GetByVendorID(VendorID: number): Observable<IPost[]> {
    return this.HttpClient.get<IPost[]>(`${environment.apiUrl}/Post/GetByVendorID/${VendorID}`)
  }

  //Reacts Requests

  GetReacts(postID: number): Observable<IReaction[]> {
    return this.HttpClient.get<IReaction[]>(`${environment.apiUrl}/React/GetReactsByPostID/${postID}`)
  }

  IsLiked(postID: number): Observable<boolean>{
    return this.HttpClient.get<boolean>(`${environment.apiUrl}/React/GetIsLiked/${postID}`)
  }

  AddReact(React:any){
    return this.HttpClient.post(`${environment.apiUrl}/React/Add`, React)
  }

  DeleteReact(postID:number){
    return this.HttpClient.delete(`${environment.apiUrl}/React/Delete/${postID}`)
  }


  //Comments Requests


  GetComments(postID: number): Observable<IComment[]> {
    return this.HttpClient.get<IComment[]>(`${environment.apiUrl}/Comment/GetCommentsByPostID/${postID}`)
  }

  AddComment(Comment: any){
    return this.HttpClient.post(`${environment.apiUrl}/Comment/Add`, Comment)
  }
}



