import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RegistreerComponent } from './registreer/registreer.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule }   from '@angular/forms';
import { SecurityComponent } from './security/security/security.component';
import { SecurityModule } from './security/security.module';
import { DasboardGebruikerComponent } from './dasboard-gebruiker/dasboard-gebruiker.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityInterceptor } from './security/security/security.interceptor';
import { AuthGuard } from './security/guards/auth.guard';
import { PollComponent } from './dasboard-gebruiker/poll/poll.component';
import { PollDetailComponent } from './dasboard-gebruiker/poll-detail/poll-detail.component';
import { VriendenComponent } from './dasboard-gebruiker/vrienden/vrienden/vrienden.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'registreer', component: RegistreerComponent },
  { path: 'login', component: SecurityComponent },
  { path: 'gebruiker', component: DasboardGebruikerComponent, canActivate: [AuthGuard] },
  { path: 'poll', component: PollComponent },
  { path: 'PollDetail', component: PollDetailComponent },
  { path: 'pollDetail/:id', component: PollDetailComponent },
  { path: 'vrienden', component: VriendenComponent },
  ];
  
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistreerComponent,
    ContactComponent,
    HomeComponent,
    SecurityComponent,
    DasboardGebruikerComponent,
    PollComponent,
    PollDetailComponent,
    VriendenComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    FormsModule,
    SecurityModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
    
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: SecurityInterceptor,
    multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
