import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  NumberofItems = new BehaviorSubject(0)
  baseUrl: string = 'https://ecommerce.routemisr.com'
  header = {
    token: localStorage.getItem('userToken') || ''
  }

  constructor(private _HttpClient: HttpClient) {

    this.getItemsInUserCart().subscribe({
      next: (response) => {

        this.NumberofItems.next(response.numOfCartItems);

      },
      error: (error) => {
        console.log(error);

      }
    })
  }

  addProductToCart(productid: string): Observable<any> {
    return this._HttpClient.post(`${this.baseUrl}/api/v1/cart`,
      {
        "productId": productid
      },
      {
        headers: this.header
      }
    )
  }

  getItemsInUserCart(): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/api/v1/cart`, {
      headers: this.header
    })
  }

  removeItemsFromUserCart(product_id: string): Observable<any> {
    return this._HttpClient.delete(`${this.baseUrl}/api/v1/cart/${product_id}`, {
      headers: this.header
    })
  }

  UpdateQuantity(product_id: string, count: number): Observable<any> {
    return this._HttpClient.put(`${this.baseUrl}/api/v1/cart/${product_id}`, {
      count: count
    }, {
      headers: this.header
    })
  }

  ClearUserCart(): Observable<any> {
    return this._HttpClient.delete(`${this.baseUrl}/api/v1/cart`,
      {
        headers: this.header
      })
  }
}
