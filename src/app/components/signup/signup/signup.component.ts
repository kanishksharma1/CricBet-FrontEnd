import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
import { MatchesService } from 'src/app/services/matchesList/matches.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  RegisterForm : FormGroup;
constructor(private fb: FormBuilder, private router: Router, private matchService : MatchesService){
  this.RegisterForm = this.fb.group({
    Name: ["", [Validators.required]],
    Email: ["", [Validators.required]],
    Password: ["", [Validators.required]],
    ConfirmPassword: ["", [Validators.required]],
  })
}

addSignupData(){
  if (this.RegisterForm.valid) {
    this.matchService.signupData(this.RegisterForm.value).subscribe({
      next: (res) => {  
        console.log(res)
        this.RegisterForm.reset;
        this.router.navigate(['signin']);
      }
      ,error:(err => {
        console.log(err)
      }) 
    })
  }
}

}
