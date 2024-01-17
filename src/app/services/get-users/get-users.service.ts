import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ENV } from 'src/app/environments/environments';
import { User, UsersArray } from 'src/app/interfaces/users-inteface';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.http.get<UsersArray>(ENV.getUsers).pipe(map(v => v.users));
  }
}
