import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAttachment, IComment, IPost, IReaction } from '../Models/IPost';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class PostService {
  constructor(private HttpClient: HttpClient) { }

  AddPost(Post: any) {
    return this.HttpClient.post(`${environment.apiUrl}/Post/AddPost`, Post)
  }

  Get(): Observable<IPost[]> {
    return this.HttpClient.get<IPost[]>(`${environment.apiUrl}/Post/Get`)
  }

  GetByVendorID(): Observable<IPost[]> {
    return this.HttpClient.get<IPost[]>(`${environment.apiUrl}/Post/GetByVendorID`)
  }
  GetAttachments(postID: number): Observable<IAttachment[]> {
    return this.HttpClient.get<IAttachment[]>(`${environment.apiUrl}/PostAttachment/GetPostAttachmentByPostID?PostID=${postID}`)
  }


  
  GetReacts(postID: number): Observable<IReaction[]> {
    return this.HttpClient.get<IReaction[]>(`http://localhost:3000/post/${postID}/reacts`)
  }
  GetComments(postID: number): Observable<IComment[]> {
    return this.HttpClient.get<IComment[]>(`http://localhost:3000/post/${postID}/comments`)
  }
}



