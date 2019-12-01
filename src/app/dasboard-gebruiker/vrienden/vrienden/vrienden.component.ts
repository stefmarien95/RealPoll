import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { UserService } from 'src/app/users/user.service';
import { Friend } from '../../models/friend/friend.module';
import { FriendService } from '../../services/friend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vrienden',
  templateUrl: './vrienden.component.html',
  styleUrls: ['./vrienden.component.scss']
})
export class VriendenComponent implements OnInit {
  email="";
  submitted : boolean = false;
  userID=parseInt(localStorage.getItem("userID"));
  friend : Friend = new Friend(0, this.userID, 0, 1);


  constructor(private _usersSerice:UserService, private _friendService:FriendService,private router:Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this._usersSerice.getUserByEmail(this.email).subscribe(
      result => {
        this.friend.ontvangerID = result.userID;
        this._friendService.addFriend(this.friend).subscribe(
        
        );
     
      }
    );
  }


}
