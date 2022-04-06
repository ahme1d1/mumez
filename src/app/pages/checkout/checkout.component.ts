import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  currentstep: any = 'shippingInformations';
  constructor() {}

  ngOnInit(): void {}
  nextStep() {
    if (this.currentstep == 'shippingInformations') {
      this.currentstep = 'paymentMethod';
    } else if (this.currentstep == 'paymentMethod') {
      this.currentstep = 'confirmation';
    } else if (this.currentstep == 'confirmation') {
      this.currentstep = 'thanks';
    }
  }
  prevStep() {
    if (this.currentstep == 'paymentMethod') {
      this.currentstep = 'shippingInformations';
    } else if (this.currentstep == 'confirmation') {
      this.currentstep = 'paymentMethod';
    }
  }
}
