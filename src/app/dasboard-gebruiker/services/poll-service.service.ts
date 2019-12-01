import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Poll } from '../models/poll/poll.module';
import { Observable } from 'rxjs';

@Injectable()
export class PollService {
constructor(private http: HttpClient) { }

getPolls(): Observable<Poll[]> {
  return this.http.get<Poll[]>("https://localhost:44308/api/Polls" );
  }
  addPoll(poll: Poll) {
   
    return this.http.post<Poll>("https://localhost:44308/api/polls", poll);
    }

    getPoll(pollID:number){
      return this.http.get<Poll[]>("https://localhost:44308/api/Polls/"+ pollID);
      }

}

