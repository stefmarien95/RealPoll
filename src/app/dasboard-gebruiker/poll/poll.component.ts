import { Component, OnInit } from '@angular/core';
import { Poll } from '../models/poll/poll.module';
import { PollService } from '../services/poll-service.service';
import { Router } from '@angular/router';
import { Answer } from '../models/answer/answer.module';
import { AnswerService } from '../services/answer-service.service';
import { AuthenticateService } from 'src/app/security/services/authenticate.service';
import { Friend } from '../models/friend/friend.module';
import { FriendService } from '../services/friend.service';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss'],
  providers:[PollService]
})
export class PollComponent implements OnInit {
  submitted : boolean = false;
  userID=parseInt(localStorage.getItem("userID"));
  model: Poll=new Poll(0,'',"",this.userID) ;
  mijnVrienden:Friend[];

  

  constructor(private _pollService:PollService, private router:Router,private _answerService:AnswerService,private _authenticateService:AuthenticateService,private _friendService:FriendService) { }

  ngOnInit() {
    this.getMijnvrienden();
  }

  
  getMijnvrienden(){
    this._friendService.getFriends().subscribe(result => {
      this.mijnVrienden=result.filter(x => (x.ontvangerID === this.userID && x.status == 2)|| (x.verstuurderID === this.userID && x.status == 2));
      
     }
    )

   
  }




  onSubmit()
  {
    this.submitted = true;
    console.log(this.model);
    this._pollService.addPoll(this.model).subscribe(result =>
    localStorage.setItem("pollID",result.pollID.toString())
  
    );
    
    this.router.navigate(['/PollDetail']);
  }


}
