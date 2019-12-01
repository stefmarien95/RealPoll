import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserLogin } from '../security/Models/user-login/user-login.module';
import { User } from 'src/app/users/models/user.model';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
providedIn: 'root'
})
export class AuthenticateService {
  isLoggedin = new BehaviorSubject(false);
constructor(private _httpClient: HttpClient) { }
isLoggedIn() 
{
  if(localStorage.getItem("token")) 
  {
    return true;
  } 
  else 
  {
    return false;
  }
}
  authenticate(userLogin: UserLogin): Observable<User> {
  return this._httpClient.post<User>("https://localhost:44308/api/Users/authenticate", userLogin);
  }

  
}
