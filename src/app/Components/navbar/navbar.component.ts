import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  isLogin: boolean = false
  number_Items = 0

  constructor(public _LoginService: LoginService, private _Router: Router, private _CartService: CartService) { }


  ngOnInit(): void {

    this._CartService.NumberofItems.subscribe(() => {
      return this.number_Items = this._CartService.NumberofItems.getValue();
    })

    this._LoginService.userTokenData.subscribe({
      next: () => {
        if (this._LoginService.userTokenData.getValue() != null) {
          this.isLogin = true;
        }
        else {
          this.isLogin = false;
        }
      }
    })



  }

  logOut() {
    localStorage.removeItem('userToken')
    this._LoginService.userTokenData.next(null)
    this._Router.navigate(['/login'])
  }


}
