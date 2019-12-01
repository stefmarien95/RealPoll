import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Answer } from '../models/answer/answer.module';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http: HttpClient) { }

  getAnswers(): Observable<Answer[]> {
    return this.http.get<Answer[]>("https://localhost:44308/api/answers" );
    }

  addAnswer(answer: Answer) {
   
    return this.http.post<Answer>("https://localhost:44308/api/Answers", answer);
    }

    updateAnswer(answerID:number, answer:Answer)
    {
      
      return this.http.put<Answer>("https://localhost:44308/api/Answers/" + answerID , answer);
    }

}
