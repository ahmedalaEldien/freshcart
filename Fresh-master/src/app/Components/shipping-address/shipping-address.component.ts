import { ActivatedRoute } from '@angular/router';
import { PaymentService } from './../../Services/payment.service';
import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.css']
})
export class ShippingAddressComponent {

  isDataRecived: boolean = false;

  idOfCart: string = ''
  constructor(private _PaymentService: PaymentService, private _ActivatedRoute: ActivatedRoute) {
  }




  ShippingAddress: FormGroup = new FormGroup({

    details: new FormControl(''),
    phone: new FormControl(''),
    city: new FormControl('')
  })

  submitShippingAddress(dataForm: FormGroup) {
    this.isDataRecived = true
    this._ActivatedRoute.params.subscribe((params) => {
      this.idOfCart = params['cartid']
    })
    this._PaymentService.checkOut(this.idOfCart, dataForm.value).subscribe({
      next: (response) => {
        console.log(response);
        this.isDataRecived = false
        if (response.status == 'success') {

          window.location.href = response.session.url
        }

      },
      error: (error) => {
        this.isDataRecived = false

        console.log(error);
      }
    })
  }

}
