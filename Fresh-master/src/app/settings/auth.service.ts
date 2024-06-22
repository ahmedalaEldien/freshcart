import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient: HttpClient) { }
  baseUrl: string = 'https://ecommerce.routemisr.com'

  header = {
    token: localStorage.getItem('userToken') || ''
  }
  forgotpassword(email: string): Observable<any> {
    return this._HttpClient.post(`${this.baseUrl}/api/v1/auth/forgotPasswords`, email)
  }
  verificationCode(code: string): Observable<any> {
    return this._HttpClient.post(`${this.baseUrl}/api/v1/auth/verifyResetCode`, code)
  }
  ChangePassword(data: any): Observable<any> {
    return this._HttpClient.put(`${this.baseUrl}/api/v1/users/changeMyPassword`,
      data,
      {
        headers: this.header
      }
    )
  }
  resetPassword(data: any): Observable<any> {
    return this._HttpClient.put(`${this.baseUrl}/api/v1/auth/resetPassword`, data)
  }



}
