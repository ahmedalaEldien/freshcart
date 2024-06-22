import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/InterFace/products';
import { ProductsService } from 'src/app/Services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productsList: Products[] = []
  searchTerm: string = ''
  isDataarrive: boolean = true;
  catId: string = ''

  constructor(private _ProductsService: ProductsService, private _ActivatedRoute: ActivatedRoute) { }


  ngOnInit(): void {

    this._ActivatedRoute.params.subscribe(params => {

      this.catId = params['id']
    })
    this.getcatsProducts();

    this.GetAllProducts();
  }
  getcatsProducts() {
    this._ProductsService.getcatsProducts(this.catId).subscribe({
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
}
