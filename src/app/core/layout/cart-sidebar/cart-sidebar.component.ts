import { Component, OnInit } from '@angular/core';
import { CartSidebarService } from '@core/services/cart-sidebar/cart-sidebar.service';
import { ifAnimation } from '@core/animations/if-animation';

@Component({
  selector: 'app-cart-sidebar',
  templateUrl: './cart-sidebar.component.html',
  styleUrls: ['./cart-sidebar.component.scss'],
  animations: [ifAnimation],
})
export class CartSidebarComponent implements OnInit {
  qty: number = 1;
  constructor(public CartSidebarService: CartSidebarService) {}

  ngOnInit(): void {}
  updateCartDetail(parameter: string) {
    if (parameter === 'plus') {
      this.qty++;
    } else if (parameter === 'minus' && this.qty > 1) {
      this.qty--;
    }
  }
}
