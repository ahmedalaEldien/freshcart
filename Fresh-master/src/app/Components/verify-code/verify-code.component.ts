import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/settings/auth.service';

@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.css']
})
export class VerifyCodeComponent {


  constructor(private _AuthService: AuthService, private _Router: Router) { }

  isvalid: boolean = false


  verifycode: FormGroup = new FormGroup({
    resetCode: new FormControl(null, [Validators.required])
  })

  sendCode(data: FormGroup) {
    this.isvalid = true
    if (data.valid) {
      this._AuthService.verificationCode(data.value).subscribe({
        next: (response) => {
          console.log(response);
          this.isvalid = false;
          if (response.status == 'Success')
            this._Router.navigate(['/resetpassword'])
        },
        error: (error) => {
          console.log(error);
          this.isvalid = false

        }
      })



    }

  }

}
