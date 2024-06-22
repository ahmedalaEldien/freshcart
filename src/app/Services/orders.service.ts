import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  baseUrl: string = 'https://ecommerce.routemisr.com'
  header = {
    token: localStorage.getItem('userToken') || ''
  }
  constructor(private _HttpClient: HttpClient, private _LoginService: LoginService) { }
  GetAllOrdes(): Observable<any> {
    let UserData: any = this._LoginService.userTokenData.getValue();
    let UserId = UserData.id;
    return this._HttpClient.get(`${this.baseUrl}/api/v1/orders/user/${UserId}`)
  }
}
