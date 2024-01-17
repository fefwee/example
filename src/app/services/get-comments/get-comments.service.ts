import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ENV } from 'src/app/environments/environments';
import { UserComments, UsersCommentArray } from 'src/app/interfaces/user-comments-interface';

@Injectable({
  providedIn: 'root'
})
export class GetCommentsService {

  constructor(private http: HttpClient) { }

  public getComments(): Observable<UserComments[]> {
    return this.http.get<UsersCommentArray>(ENV.getComments).pipe(map(v => v.comments))
  }
}
