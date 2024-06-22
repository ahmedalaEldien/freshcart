import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {



  constructor(private _LoginService: LoginService, private _Router: Router) { }

  isDataSended: boolean = false;
  loginErrorMassage: string = '';
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9$@#]{6,10}$/)])

  }

  )

  submitLogin(userData: FormGroup) {

    this.isDataSended = true
    if (userData.valid) {
      this._LoginService.sendLoginForm(this.loginForm.value).subscribe({
        next: (response) => {
          this.isDataSended = false;
          if (response.message == 'success') {
            localStorage.setItem('userToken', response.token);
            this._LoginService.decodeUserToken()
            this._Router.navigate(['/home']);
          }

        },
        error: (error) => {
          this.isDataSended = false
          this.loginErrorMassage = error.error.message

        }
      })
    }
  }






}

