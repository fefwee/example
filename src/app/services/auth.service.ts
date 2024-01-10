import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthUserData } from '../interfaces/auth-interface';
import { Observable } from 'rxjs';
import { ENV } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl!:string;

  constructor(private http:HttpClient) {
    this.authUrl = ENV.authUrl;
   }

  public authUser (data:AuthUserData):Observable<AuthUserData>{
    console.log(data)
      return this.http.post<AuthUserData>(this.authUrl,data)
  }
}
