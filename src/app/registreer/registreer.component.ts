import { Component, OnInit } from '@angular/core';
import { User } from '../users/models/user.model';

import { NgForOf } from '@angular/common';
import { NgForm, FormGroup, Validators } from '@angular/forms';
import { format } from 'url';
import { UserService } from '../users/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registreer',
  templateUrl: './registreer.component.html',
  styleUrls: ['./registreer.component.scss']
})
export class RegistreerComponent implements OnInit {
  submitted : boolean = false;
  
  model: User=new User(0,'','','','','','') ;
  constructor(private _userService:UserService, private router:Router)
   {}
  
  ngOnInit() { }
  
  onSubmit()
  {
    this.submitted = true;
    console.log(this.model);
    this._userService.addUser(this.model).subscribe();
    this.router.navigate(['/login']);
  }
  




}

