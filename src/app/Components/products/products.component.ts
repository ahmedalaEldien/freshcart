import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/InterFace/products';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productsList: Products[] = []
  searchTerm: string = ''
  isDataarrive: boolean = true;

  constructor(private _ProductsService: ProductsService) { }


  ngOnInit(): void {
    this.GetAllProducts();
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
