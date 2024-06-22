import { error } from 'jquery';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/settings/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) { }
  isvalid: boolean = false
  errormessage: string = ''
  Forgotpassword: FormGroup = new FormGroup({
    currentPassword: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9$@#]{6,10}$/)]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9$@#]{6,10}$/)]),
    rePassword: new FormControl(null, [Validators.required]),
  },

    { validators: this.checkRepasswordMatch }
  )


  ChangeMyPassword(data: any) {
    this.isvalid = true
    if (data.valid) {
      this._AuthService.ChangePassword(data.value).subscribe({
        next: (response) => {
          console.log(response);
          this.isvalid = false

          if (response.message == 'success') {

            localStorage.setItem('userToken', response.token)

            this._Router.navigate(['/login']);
          }
        },
        error: (error) => {
          console.log(error);
          this.isvalid = false
          this.errormessage = error.error.message


        }
      })



    }

  }

  checkRepasswordMatch(dataForm: any) {

    if (dataForm.get('password')?.value == dataForm.get('rePassword')?.value) {

      return null;
    }
    else {
      dataForm.get('rePassword')?.setErrors({ Repassword: 'Repassword Not Matched Password' });
      return { Repassword: 'Repassword Not Matched Password' }
    }
  }

}
