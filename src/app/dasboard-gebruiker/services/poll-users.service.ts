import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PollUser } from '../models/pollgebruiker/pollgebruiker.module';
import { Observable } from 'rxjs';
import { Poll } from '../models/poll/poll.module';

@Injectable({
  providedIn: 'root'
})
export class PollUsersService {
  constructor(private http: HttpClient) { }

getPollUsers(): Observable<PollUser[]> {
  return this.http.get<PollUser[]>("https://localhost:44308/api/PollUsers" );
  }
  addPollUser(pollUser: PollUser) {
   
    return this.http.post<Poll>("https://localhost:44308/api/PollUsers", PollUser);
    }
}
