import { Component, OnInit } from '@angular/core';
import { PollService } from '../dasboard-gebruiker/services/poll-service.service';
import { Poll } from '../dasboard-gebruiker/models/poll/poll.module';
import { UserService } from '../users/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [PollService]
})
export class HomeComponent implements OnInit {
 // polls:Poll[];
 aantal:number;
 aantalPolls:number

  constructor(private _pollService:PollService,private _userService:UserService) { }

  ngOnInit() {
    this.getUsers();
    this.getPolls();
  }

//Aantal polls ophalen
  public getPolls() {
    const polls = this._pollService.getPolls().subscribe
    (
      result => {

        this.aantalPolls=result.length;
        console.log(this.aantal)
      }
    )
  }
//aantal gebruikers ophalen
  getUsers()
  {
    this._userService.getUsers().subscribe
    (
      result => {

        this.aantal=result.length;
        console.log(this.aantal)
      }
    )
    
  }



}
