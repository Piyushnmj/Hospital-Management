import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/Services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup
  availableData: any

  constructor(private formBuilder: FormBuilder, private userService: UserService, private snackBar: MatSnackBar, private router: Router) {
    this.loginForm = formBuilder.group({
      login: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }

  login() {

    let dataCheck: boolean = false;

    if (this.loginForm.valid) {
      let result = {
        login: this.loginForm.value.login,
        password: this.loginForm.value.password
      }
      this.userService.Login().subscribe((response: any) => {

        console.log(response);

        for (let data of response) {
          if (data.email == result.login && data.password == result.password) {
            this.availableData = data;
            dataCheck = true;
            localStorage.setItem('id', data.id);
            this.router.navigate(['home']);
            
            this.snackBar.open('Login Successfull...', 'Dismiss', {
              duration: 3000,
              verticalPosition: 'bottom',
              horizontalPosition: 'center'
            })
          }
        }

        if (dataCheck == false) {
          this.snackBar.open('Login Unsuccessfull...', 'Dismiss', {
            duration: 3000,
            verticalPosition: 'bottom',
            horizontalPosition: 'center'
          })
        }
      })
    }
  }
}
