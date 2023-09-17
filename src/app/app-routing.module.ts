import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiveMatchesComponent } from './components/matches/live-matches/live-matches.component';
import { SigninComponent } from './components/signin/signin/signin.component';
import { SignupComponent } from './components/signup/signup/signup.component';
import { BetsComponent } from './components/bets/bets/bets.component';
import { MyBetsComponent } from './components/my-bets/my-bets.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'', component:LiveMatchesComponent},
  {path:'signup', component:SignupComponent},
  {path:'signin', component:SigninComponent},
  {path:'bets', component:BetsComponent},
  {path:'mybets', component:MyBetsComponent, canActivate:[AuthGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
