import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { error } from 'jquery';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductDetails } from 'src/app/InterFace/product-details';
import { CartService } from 'src/app/Services/cart.service';
import { ProductsDetailsService } from 'src/app/Services/products-details.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})

export class ProductsDetailsComponent implements OnInit {
  ProductId: string = '';
  ProductDetails: any;
  isDataarrive: boolean = true;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },

    },
    nav: true
  }


  constructor(private _ProductsDetailsService: ProductsDetailsService, private _ActivatedRoute: ActivatedRoute, private _CartService: CartService, private toastr: ToastrService) { }

  ngOnInit(): void {

    this._ActivatedRoute.params.subscribe(params => {

      this.ProductId = params['id']
    })
    this._ProductsDetailsService.getProductDetails(this.ProductId).subscribe({
      next: (response) => {

        this.ProductDetails = response.data;
        this.isDataarrive = false;

      },
      error: (error) => {
        console.log(error);
        this.isDataarrive = false;


      }
    });


  }

  addToCart(Product_id: string) {
    this._CartService.addProductToCart(Product_id).subscribe({
      next: (response) => {
        console.log(response);
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

}
