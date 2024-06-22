import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _HttpClient: HttpClient) { }
  baseUrl: string = 'https://ecommerce.routemisr.com'
  sendRegisterForm(data: any): Observable<any> {
    return this._HttpClient.post(`${this.baseUrl}/api/v1/auth/signup`, data)
  }
}
