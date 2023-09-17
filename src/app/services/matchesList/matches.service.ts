import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  constructor(private http:HttpClient, private router: Router) { }

  baseurl = "https://cricbuzz-cricket.p.rapidapi.com/matches/v1/";
  
  headers = {
    'X-RapidAPI-Key': 'ccc961b77bmsh00b22bc9ebb1796p164944jsn5839b950168f',
    'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
  }
  
  
  getMatches(data:string){
    return this.http.get(this.baseurl+data, {headers:this.headers});
  }
  
  signupData(signupDetails: any) {
    return this.http.post<any>("https://localhost:7024/api/Auth/Signup", signupDetails)
  }
 
   login(loginDetails: any) {
     return this.http.post<any>("https://localhost:7024/api/Auth/Login", loginDetails)
  }
  
  logout(){
    localStorage.clear();
    this.router.navigate(['signin'])
  }

  setToken(tokenValue:string) {
    localStorage.setItem('token',tokenValue)
  }
  
  getToken() {
    localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}

