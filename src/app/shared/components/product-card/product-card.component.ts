import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  fav: boolean = false;
  cart: boolean = false;
  compare: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
