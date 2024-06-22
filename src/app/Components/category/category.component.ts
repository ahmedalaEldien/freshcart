import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/InterFace/categories';
import { CategoriesService } from 'src/app/Services/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  constructor(private _CategoriesService: CategoriesService) { }

  isDataarrive: boolean = true;
  categoryList: Categories[] = []
  ngOnInit(): void {
    this._CategoriesService.getAllCategories().subscribe({
      next: (response) => {
        this.isDataarrive = false
        this.categoryList=response.data
        console.log(this.categoryList);
      },
      error: (error) => {
        console.log(error);
        this.isDataarrive = false


      }
    })
  }
}
