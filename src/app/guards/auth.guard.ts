import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MatchesService } from '../services/matchesList/matches.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private matchService:MatchesService, private router:Router){}

  canActivate(): boolean  {
    if(this.matchService.isLoggedIn()){
      return true;
    }
    else{
      this.router.navigate(['signin']);
      return false;
    }
  }
  
}
