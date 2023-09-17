import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { LiveMatchesComponent } from './components/matches/live-matches/live-matches.component';
import { SigninComponent } from './components/signin/signin/signin.component';
import { SignupComponent } from './components/signup/signup/signup.component';
import { BetsComponent } from './components/bets/bets/bets.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MyBetsComponent } from './components/my-bets/my-bets.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LiveMatchesComponent,
    SigninComponent,
    SignupComponent,
    BetsComponent,
    MyBetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
