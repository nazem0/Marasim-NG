import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IComment, IPost, IReaction } from '../Models/IPost';
import { environment } from 'src/environments/environment';
import { PaginationViewModel } from '../Models/PaginationViewModel';

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

  GetByVendorId(VendorId: number, PageIndex: number, PageSize: number): Observable<PaginationViewModel<IPost>>{
    return this.HttpClient.get<PaginationViewModel<IPost>>(`${environment.apiUrl}/Post/GetByVendorId/${VendorId}?PageSize=${PageSize}&PageIndex=${PageIndex}`)
  }

  GetByPostsByFollow(PageIndex: number, PageSize: number): Observable<PaginationViewModel<IPost>> {
    return this.HttpClient.get<PaginationViewModel<IPost>>(`${environment.apiUrl}/Post/GetByPostsByFollow??PageSize=${PageSize}&PageIndex=${PageIndex}`)
  }


  //Reacts Requests

  GetReactsByPostId(postId: number,pageIndex:number,pageSize=10): Observable<PaginationViewModel<IReaction>>{
    return this.HttpClient.get<PaginationViewModel<IReaction>>(`${environment.apiUrl}/React/GetByPostId/${pageIndex}?postId=${postId}&pageSize=${pageSize}`)
  }

  IsLiked(postId: number): Observable<boolean> {
    return this.HttpClient.get<boolean>(`${environment.apiUrl}/React/GetIsLiked/${postId}`)
  }

  AddReact(PostId: any) {
    return this.HttpClient.post(`${environment.apiUrl}/React/Add/`, PostId)
  }

  DeleteReact(postId: number) {
    return this.HttpClient.delete(`${environment.apiUrl}/React/Delete/${postId}`)
  }

  GetReactsCountByPostId(postId:number):Observable<number>{
    return this.HttpClient.get<number>(`${environment.apiUrl}/React/GetReactsCountByPostId/${postId}`)
  }
  //Comments Requests


  GetCommentsByPostId(postId: number,pageIndex:number,pageSize=5): Observable<PaginationViewModel<IComment>>{
    return this.HttpClient.get<PaginationViewModel<IComment>>(`${environment.apiUrl}/Comment/GetCommentsByPostId/${pageIndex}?postId=${postId}&pageSize=${pageSize}`)
  }

  AddComment(Comment: any) {
    return this.HttpClient.post(`${environment.apiUrl}/Comment/Add`, Comment)
  }

  GetCommentsCountByPostId(postId:number):Observable<number>{
    return this.HttpClient.get<number>(`${environment.apiUrl}/Comment/GetCommentsCountByPostId/${postId}`)
  }
  
}



