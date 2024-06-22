import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Products } from 'src/app/InterFace/products';
import { CartService } from 'src/app/Services/cart.service';
import { ProductsService } from 'src/app/Services/products.service';
import { ToastrService } from 'ngx-toastr';
import { WishListService } from 'src/app/Services/wish-list.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productsList: Products[] = []
  wishlistIds: string[] = []
  searchTerm: string = ''
  page: any;
  isDataarrive: boolean = true;
  isAdd: boolean = false
  constructor(private _ProductsService: ProductsService, private _CartService: CartService, private toastr: ToastrService, private _WishListService: WishListService) { }
  ngOnInit(): void {
    this.changeThemescolors();
    this.GetAllProducts();
    this._WishListService.displayAllProductInWishList().subscribe({
      next: (response) => {
        this.wishlistIds = response.data.map((items: any) => items._id)
        if (this.wishlistIds.length == 0) {
        }
      }
    })

  }
  changeThemescolors() {

    $(".boxColor").eq(0).css("backgroundColor")
    $(".boxColor").eq(1).css("backgroundColor")
    $(".boxColor").eq(2).css("backgroundColor")
    $(".boxColor").eq(3).css("backgroundColor")
    $(".boxColor").eq(4).css("backgroundColor")
    $(".boxColor").eq(5).css("backgroundColor")
    $(".boxColor").eq(6).css("backgroundColor", "#036666")
    $(".boxColor").eq(7).css("backgroundColor", "#390099")
    $(".boxColor").eq(8).css("backgroundColor", "#ff5400")
    $(".boxColor").eq(9).css("backgroundColor", "#036666")
    $(".boxColor").eq(10).css("backgroundColor", "#780116")
    $(".boxColor").eq(11).css("backgroundColor", "#d81159")
    $(".boxColor").eq(12).css("backgroundColor", "#000022")
    $(".boxColor").eq(13).css("backgroundColor", "#6f4518")
    $(".boxColor").eq(14).css("backgroundColor", "#0aad0a")

    $(".boxColor").on("click", function (e) {
      let Color = $(e.target).css("backgroundColor")
      $(":root").css("--main-color", Color)
      $("#icon").css("backgroundColor", Color)
    })
    $("#icon").on("click", function () {
      $(".saidBox").animate({ width: "toggle", paddingInline: "toggle" }, 1000)
    })
  }


  GetAllProducts() {
    this._ProductsService.getAllProducts().subscribe({
      next: (response) => {
        this.productsList = response.data;
        this.isDataarrive = false;
      },
      error: (error) => {
        console.log(error);
        this.isDataarrive = false;


      }
    })
  }

  addToCart(Product_id: string) {
    this._CartService.addProductToCart(Product_id).subscribe({
      next: (response) => {
        this._CartService.NumberofItems.next(response.numOfCartItems)
        this.toastr.success(response.message, " ", {
          progressBar: true,
          positionClass: 'toast-top-right'
        });

      },
      error: (error) => {
        console.log(error);
      }
    })

  }


  addProductToWishList(Product_id: string) {
    this.isDataarrive = true

    this._WishListService.addToWishList(Product_id).subscribe({
      next: response => {
        console.log(response);
        this.wishlistIds = response.data


        this.toastr.success(response.message, " ", {
          progressBar: true,
          positionClass: 'toast-top-right'
        });
        for (let i = 0; i < response.data.length; i++) {

          if (Product_id == response.data[i]) {
            $('.colo').addClass('heartColor')
          }

        }
        this.isDataarrive = false


      },
      error: error => {
        console.log(error);
        this.isDataarrive = false

      }
    })
  }



  RemoveProductToWishList(Product_id: string) {

    this._WishListService.RemoveProductFromWishList(Product_id).subscribe({
      next: response => {
        console.log(response);
        this.wishlistIds = response.data


        this.toastr.error(response.message, " ", {
          progressBar: true,
          positionClass: 'toast-top-right'
        });
        for (let i = 0; i < response.data.length; i++) {

          if (Product_id == response.data[i]) {
            $('.colo').addClass('heartColor')
          }

        }

      },
      error: error => {
        console.log(error);

      }
    })
  }
}
