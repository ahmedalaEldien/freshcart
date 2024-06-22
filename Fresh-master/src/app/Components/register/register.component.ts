import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/Services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent {

  constructor(private _RegisterService: RegisterService, private _Router: Router) { }

  isDataSended: boolean = false;
  registerErrorMassage: string = '';

  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9$@#]{6,10}$/)]),
    rePassword: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)])
  },
    { validators: this.checkRepasswordMatch }

  )

  submitRegister(userData: FormGroup) {
    this.isDataSended = true
    if (userData.valid) {

      this._RegisterService.sendRegisterForm(this.registerForm.value).subscribe({

        next: (response) => {

          this.isDataSended = false;

          console.log(response);

          if (response.message == 'success') {

            this._Router.navigate(['/login']);
          }

        },
        error: (error) => {
          this.isDataSended = false
          this.registerErrorMassage = error.error.message

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
