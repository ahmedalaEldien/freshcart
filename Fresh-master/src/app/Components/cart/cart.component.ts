import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { count } from 'rxjs';
import { Cart, ProductProduct } from 'src/app/InterFace/cart';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  CartList: any[] = [];
  numberofCartItems: number = 0;
  Totalprice: number = 0;
  isDataarrive: boolean = true;
  isDeleted: boolean = false;
  errorMessage: string = '';
  cartid: string = ''
  constructor(private _CartService: CartService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this._CartService.getItemsInUserCart().subscribe({
      next: (response) => {
        console.log(response);
        this.isDataarrive = false
        this.cartid = response.data._id
        this.CartList = response.data.products;
        this.numberofCartItems = response.numOfCartItems;
        this.Totalprice = response.data.totalCartPrice;

      },
      error: (error) => {
        this.isDataarrive = false
        console.log(error);
        this.errorMessage = 'Your Cart Is Empyty :)'
      }
    })
  }


  RemoveSpacificProduct(productid: string) {
    this.isDeleted = true
    this._CartService.removeItemsFromUserCart(productid).subscribe({
      next: (response) => {
        this._CartService.NumberofItems.next(response.numOfCartItems)
        this.isDeleted = false
        this.CartList = response.data.products;
        this.numberofCartItems = response.numOfCartItems;
        this.Totalprice = response.data.totalCartPrice;
        this.toastr.error(response.message, " ", {
          progressBar: true,
          positionClass: 'toast-top-right'
        });


      },
      error: (error) => {
        this.isDeleted = false
        console.log(error);


      }
    })

  }

  UpdateCartProduct(productid: string, count: number) {
    this._CartService.UpdateQuantity(productid, count).subscribe({
      next: (response) => {
        this.CartList = response.data.products;
        this.numberofCartItems = response.numOfCartItems;
        this.Totalprice = response.data.totalCartPrice;

      },
      error: (error) => {
        console.log(error);


      }
    })

  }


  clearCart() {
    this.isDataarrive = true

    this._CartService.ClearUserCart().subscribe({
      next: (response) => {
        this._CartService.NumberofItems.next(response.numOfCartItems)
        this.isDataarrive = false
        this.CartList = [];
        this.numberofCartItems = 0;
        this.Totalprice = 0;
        this.errorMessage = 'Your Cart Is Empyty :)'

      },
      error: (error) => {
        this.isDataarrive = false
        console.log(error);


      }
    })

  }

}
