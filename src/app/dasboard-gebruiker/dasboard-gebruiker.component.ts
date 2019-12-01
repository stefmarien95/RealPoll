import { Component, OnInit, Input } from '@angular/core';

import { PollService } from './services/poll-service.service';
import { PollUser } from './models/pollgebruiker/pollgebruiker.module';
import { PollUsersService } from './services/poll-users.service';
import { UserService } from '../users/user.service';
import { Poll } from './models/poll/poll.module';
import { Router } from '@angular/router';
import { FriendService } from './services/friend.service';
import { Friend } from './models/friend/friend.module';
import { User } from '../users/models/user.model';

@Component({
  selector: 'app-dasboard-gebruiker',
  templateUrl: './dasboard-gebruiker.component.html',
  styleUrls: ['./dasboard-gebruiker.component.scss'],
  providers: [PollService]
})
export class DasboardGebruikerComponent implements OnInit {
  mijnPolls: Poll[];
  nietMijnPolls:Poll[];
  polls:Poll[];
  pollusers:PollUser[];
  mijnVrienden:Friend[];
  mijnVriendenNaam:User[];
  mijnVerzoeken:Friend[];
  submitted : boolean = false;
  userID=parseInt(localStorage.getItem("userID"));
  model: Poll=new Poll(0,'',"",this.userID) ;

 
  
  constructor(private _pollUsersService:PollUsersService,private _userService:UserService,private _pollService:PollService,private router:Router,private _friendService:FriendService) 
  { 
    this._pollUsersService.getPollUsers().subscribe
    (
      result => 
      {
        this.pollusers = result;
        console.log(result);
     
      }
    );

}



getPolls(){
  this._pollService.getPolls().subscribe(
    result => {
    this.polls=result;
    console.log(result)
    }
  );
}

showDetailPoll(){

  this.submitted = true;
  
 
  //localStorage.setItem("pollID",m.pollID.toString())
  
}

getMijnPolls(){
  var userID=parseInt(localStorage.getItem("userID"));
  console.log(userID);
 
  this._pollService.getPolls().subscribe(
    result => {
      //result.filter(x => x.pollID === userID)
    this.polls=result;
   
    
    this.mijnPolls=result.filter(x => x.makerID === userID);
    
    console.log(this.mijnPolls);
    console.log(this.polls);
    }
  );
}

getMijnvrienden(){
  this._friendService.getFriends().subscribe(result => {
    this.mijnVrienden=result.filter(x => (x.ontvangerID === this.userID && x.status == 2)|| (x.verstuurderID === this.userID && x.status == 2));
    
  
  }
  )

}

getMijnverzoeken()
{
  this._friendService.getFriends().subscribe(result => 
    {
     this.mijnVerzoeken=result.filter(x => (x.ontvangerID === this.userID && x.status == 1));
    //console.log("vrienden: " + this.mijnVerzoeken)
    }
  
  )
}

veranderVriendschap(vriendschap : Friend, status : number) {
  // 0 => afgewezen
  // 1 => verstuurd
  // 2 => geacepteerd
  vriendschap.status = status;
 
  //put request
  this._friendService.updateFriend(vriendschap.friendID,vriendschap).subscribe()

  this.getMijnverzoeken();
  this.getMijnvrienden();
}

  ngOnInit() {
    this.getMijnPolls();
    this.getMijnverzoeken();
    this.getMijnvrienden();
  }

}
