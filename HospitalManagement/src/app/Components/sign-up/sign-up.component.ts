import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupForm!:FormGroup;
  result: any;
  constructor(private formBuilder : FormBuilder, private userService: UserService, private router: Router) { 
     this.signupForm = formBuilder.group({
      name: new FormControl('',Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
     })
  }

  ngOnInit(): void { }

  signup(){
   this.result = {
      name: this.signupForm.value.name,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password
    }
    this.userService.Signup(this.result).subscribe((response:any)=>{
      console.log(response);
      this.router.navigate(["login"]);
    })
  }
}
