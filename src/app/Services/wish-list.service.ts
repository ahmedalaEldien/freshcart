import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  constructor(private _HttpClient: HttpClient) { }

  baseUrl: string = 'https://ecommerce.routemisr.com'
  header = {
    token: localStorage.getItem('userToken') || ''
  }


  addToWishList(productid: string): Observable<any> {
    return this._HttpClient.post(`${this.baseUrl}/api/v1/wishlist`,
      {
        "productId": productid
      },
      {
        headers: this.header
      }
    )
  }


  displayAllProductInWishList(): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/api/v1/wishlist`, {
      headers: this.header
    })
  }

  RemoveProductFromWishList(productid: string): Observable<any> {
    return this._HttpClient.delete(`${this.baseUrl}/api/v1/wishlist/${productid}`,
      {
        headers: this.header
      })
  }



}





