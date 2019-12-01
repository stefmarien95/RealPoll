import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../users/models/user.model';

@Injectable({
  providedIn: 'root'
  })
  export class UserService {

  constructor(private http: HttpClient) { }
  getUsers(): Observable<User[]>
   {
    return this.http.get<User[]>("https://localhost:44308/api/Users");
  }
  addUser(user: User) {
   
    return this.http.post<User>("https://localhost:44308/api/Users", user);
    }

    getUserByEmail(email:string)
   {
    return this.http.get<User>("https://localhost:44308/api/Users/SearchOnEmail/"+ email );
  }

  getUser(userID:number) 
  {
   return this.http.get<User>("https://localhost:44308/api/Users/" + userID);
 }

 





}
