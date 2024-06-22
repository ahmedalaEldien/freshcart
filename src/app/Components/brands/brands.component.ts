import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/InterFace/products';
import { BrandsService } from 'src/app/Services/brands.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  constructor(private _BrandsService: BrandsService) { }
  isDataarrive: boolean = true;
  brandList: Brand[] = []
  ngOnInit(): void {
    this._BrandsService.getAllBrands().subscribe({
      next: (response) => {
        this.isDataarrive = false
        this.brandList = response.data
        console.log(this.brandList);
      },
      error: (error) => {
        console.log(error);
        this.isDataarrive = false


      }
    })
  }
}
