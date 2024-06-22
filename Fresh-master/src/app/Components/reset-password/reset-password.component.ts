import { error } from 'jquery';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/settings/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) { }

  isvalid: boolean = false
  errormessage: string = ''

  restPassword: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    newPassword: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9$@#]{6,10}$/)])
  })

  resetPassword(data: FormGroup) {
    this.isvalid = true
    if (data.valid) {
      this._AuthService.resetPassword(data.value).subscribe({
        next: (response) => {
          console.log(response);
          this.isvalid = false;
          localStorage.setItem('userToken', response.token)
          this._Router.navigate(['/login'])
        },
        error: (error) => {
          console.log(error);
          this.isvalid = false
          this.errormessage = error.error.message

        }
      })



    }

  }

}
