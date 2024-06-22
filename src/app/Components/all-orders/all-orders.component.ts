import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/Services/orders.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {
  ordersList: any[] = []
  isDataarrive: boolean = true;
  constructor(private _OrdersService: OrdersService) { }
  ngOnInit(): void {

    this._OrdersService.GetAllOrdes().subscribe({
      next: (response) => {
        console.log(response);
        this.ordersList = response
        this.isDataarrive = false
      },
      error: (error) => {
        console.log(error);
        this.isDataarrive = false
      }
    })
  }


}
