import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  baseUrl: string = 'https://ecommerce.routemisr.com'


  constructor(private _HttpClient: HttpClient) { }


  getAllProducts(): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/api/v1/products`)

  }

  getcatsProducts(catId: string): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/api/v1/products?category[in]=${catId}`)

  }




}
