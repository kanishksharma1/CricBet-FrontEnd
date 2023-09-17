import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatchesService } from 'src/app/services/matchesList/matches.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  LoginForm : FormGroup

  constructor(private matchservice:MatchesService, private fb:FormBuilder, private router: Router){
    this.LoginForm = this.fb.group({
      Email: ["", [Validators.required]],
      Password: ["", [Validators.required]]
    })
  }

  login(){
    this.matchservice.login(this.LoginForm.value).subscribe({
      next:(res) => {
        console.log(res.message);
        this.LoginForm.reset();
        this.matchservice.setToken(res.token);
        this.router.navigate(['mybets']);
      }
      ,error:(err => {
        console.log(err.message)
      }) 
      
    })
  }



}
