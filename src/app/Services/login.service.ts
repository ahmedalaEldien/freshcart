import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    if (localStorage.getItem('userToken') != null) {

      this.decodeUserToken();
    }

  }

  userTokenData = new BehaviorSubject(null);
  baseUrl: string = 'https://ecommerce.routemisr.com'

  sendLoginForm(data: any): Observable<any> {
    return this._HttpClient.post(`${this.baseUrl}/api/v1/auth/signin`, data)
  }


  decodeUserToken() {
    let UndecodedToken = JSON.stringify(localStorage.getItem('userToken'));
    this.userTokenData.next(jwtDecode(UndecodedToken));
  }


}
