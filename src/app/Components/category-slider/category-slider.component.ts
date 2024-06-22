import { Component, OnInit } from '@angular/core';
import { error } from 'jquery';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Categories } from 'src/app/InterFace/categories';
import { CategoriesService } from 'src/app/Services/categories.service';

@Component({
  selector: 'app-category-slider',
  templateUrl: './category-slider.component.html',
  styleUrls: ['./category-slider.component.css']
})
export class CategorySliderComponent implements OnInit {

  constructor(private _CategoriesService: CategoriesService) { }

  CategoriesList: Categories[] = []

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
      400: {
        items: 2
      },
      740: {
        items: 7
      },

    },
    nav: true
  }





  ngOnInit(): void {

    this.getCategories();
  }
  getCategories() {
    this._CategoriesService.getAllCategories().subscribe({
      next: (response) => {
        this.CategoriesList = response.data;

      },
      error: (error) => {
        console.log(error);

      }
    })
  }


}
