import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { error } from 'jquery';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {

  constructor(private _AuthService: AuthService, private _Router: Router) { }
  isvalid: boolean = false


  Forgotpassword: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email])
  })


  forgotpassword(data: any) {
    this.isvalid = true
    if (data.valid) {
      this._AuthService.forgotpassword(data.value).subscribe({
        next: (response) => {
          console.log(response);
          this.isvalid = false
          this._Router.navigate(['/verifycode'])

        },
        error: (error) => {
          console.log(error);
          this.isvalid = false

        }
      })



    }

  }
}
