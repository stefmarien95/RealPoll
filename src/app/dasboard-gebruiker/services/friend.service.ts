import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Friend } from '../models/friend/friend.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  constructor(private http: HttpClient) {}
  addFriend(friend: Friend) {
    return this.http.post<Friend>("https://localhost:44308/api/Friends", friend);
    }

    getFriends(): Observable<Friend[]> {
      return this.http.get<Friend[]>("https://localhost:44308/api/Friends" );
      }

      updateFriend(friendID:number, friend:Friend)
      {
        
        return this.http.put<Friend>("https://localhost:44308/api/Friends/" + friendID , friend);
      }
}
