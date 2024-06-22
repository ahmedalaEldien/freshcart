import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Product } from './../../InterFace/shippingadress';
import { Component, OnInit } from '@angular/core';
import { error } from 'jquery';
import { WishListService } from 'src/app/Services/wish-list.service';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  constructor(private _WishListService: WishListService, private toastr: ToastrService, private _CartService: CartService) { }

  WishList: any[] = [];
  isDataarrive: boolean = true
  price: any;
  errorMessage: string = ''



  ngOnInit(): void {

    this.displayWishList()
  }

  displayWishList() {
    this._WishListService.displayAllProductInWishList().subscribe({
      next: (response) => {
        this.isDataarrive = false
        this.WishList = response.data
        this.price = response.data.price
        console.log(this.WishList);
        if (this.WishList.length == 0) {

          this.errorMessage = 'Your WishList is Empty :)'

        }
      },
      error: (error) => {
        this.isDataarrive = false
        console.log(error);
        this.errorMessage = 'Your WishList is Empty :)'


      }
    })
  }


  removeProductinwishlist(id: string) {
    this.isDataarrive = true
    this._WishListService.RemoveProductFromWishList(id).subscribe({
      next: response => {
        console.log(response);
        console.log('Deleted');
        this.isDataarrive = false
        this.displayWishList()
        if (this.WishList.length == 0) {
          this.errorMessage = 'Your WishList is Empty :)'
        }
        this.toastr.error(response.message, " ", {
          progressBar: true,
          positionClass: 'toast-top-right'
        });

      },
      error: error => {
        console.log(error);
        this.isDataarrive = false
        this.errorMessage = 'Your WishList is Empty :)'


      }
    })
  }

  addToCart(Product_id: string) {
    this.isDataarrive = true
    this._CartService.addProductToCart(Product_id).subscribe({
      next: (response) => {
        this._CartService.NumberofItems.next(response.numOfCartItems)
        this.toastr.success(response.message, " ", {
          progressBar: true,
          positionClass: 'toast-top-right'
        });
        this.removeProductinwishlist(Product_id);
        this.isDataarrive = false


      },
      error: (error) => {
        console.log(error);
        this.isDataarrive = false

      }
    })

  }

}
