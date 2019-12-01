import { Component, OnInit, OnDestroy } from '@angular/core';
import { Answer } from '../models/answer/answer.module';
import { Router, ActivatedRoute } from '@angular/router';
import { AnswerService } from '../services/answer-service.service';
import { PollService } from '../services/poll-service.service';
import { Poll } from '../models/poll/poll.module';


@Component({
  selector: 'app-poll-detail',
  templateUrl: './poll-detail.component.html',
  styleUrls: ['./poll-detail.component.scss'],
  //providers:[PollService]
  providers: [PollService]
})
export class PollDetailComponent implements OnInit{
  submitted : boolean = false;
 
  mySubscription: any;
  poll:Poll[];
  answer:Answer[];
  AnswerPoll:Answer[];
  pollID=parseInt(localStorage.getItem("pollID"));
  modelAnswer: Answer=new Answer(0,"",this.pollID,0);
  

  constructor(private router:Router,private _answerService:AnswerService,private _pollservice:PollService,) 
  {
    
  }

  getPoll()
  { 
    this._pollservice.getPoll(this.pollID).subscribe(
      result=>{

        this.poll=result;
        console.log(this.poll); }

    )
 
  }
  getAnswers()
  {
    this._answerService.getAnswers().subscribe(
    result => {
    this.answer=result;
    this.AnswerPoll=result.filter(x => x.pollID === this.pollID);
    console.log(this.AnswerPoll);
    }
    );
  }

  stem(antwoord : Answer) 
  {
      antwoord.count +=1;
    
     //put request
     this._answerService.updateAnswer(antwoord.answerID,antwoord).subscribe()
   
   }


  onAnswerSubmit()
  {
    this.submitted = true;
    console.log(this.modelAnswer);
    this._answerService.addAnswer(this.modelAnswer).subscribe()
    //this.router.navigate(['PollDetail']);
    window.location.reload()
   
  }

  ngOnInit() {

 
   
    this.getPoll();
 
    this.getAnswers();
    
    console.log(Poll);
  }



}
