import { Component, OnInit } from '@angular/core';
import { UserLogin } from './Models/user-login/user-login.module';
import { AuthenticateService } from '../services/authenticate.service';
import { from, Observable } from 'rxjs';
import { User } from 'src/app/users/models/user.model';
import { RouterLink, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {
  model : UserLogin = new UserLogin('test','test');
  submitted : boolean = false;
  user: Observable<User[]>;
  userlogin:UserLogin;
  
  constructor(private _authenticateService : AuthenticateService, private router:Router) { }

  ngOnInit() {
    
  }

  onSubmit() {

    this.submitted = true;
    
    this._authenticateService.authenticate(this.model).subscribe(result => {
    this._authenticateService.isLoggedin.next(result.token ? true : false);
    localStorage.setItem("token",result.token);
    localStorage.setItem("userID",result.userID.toString());
    
    console.log('logging in');
    this.router.navigate(['/gebruiker']);
    
    })
   
    
   }


 
}
