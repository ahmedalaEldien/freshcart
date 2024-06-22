import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, using } from 'rxjs';
import { ShippingAddress } from '../InterFace/shippingadress';

@Injectable({
  providedIn: 'root'
})

export class PaymentService {

  baseUrl: string = 'https://ecommerce.routemisr.com'
  header = {
    token: localStorage.getItem('userToken') || ''
  }
  constructor(private _HttpClient: HttpClient) { }
  checkOut(cartId: string, shippingaddress: ShippingAddress): Observable<any> {
    return this._HttpClient.post(`${this.baseUrl}/api/v1/orders/checkout-session/${cartId}?url=https://github.com/Eng-Hossam9/Fresh-Cart`,
      {
        shippingAddress: shippingaddress
      },
      {
        headers: this.header
      }

    )
  }
}
