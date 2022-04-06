import { Component, OnInit } from '@angular/core';
import { CartSidebarService } from '@core/services/cart-sidebar/cart-sidebar.service';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss'],
})
export class MobileNavComponent implements OnInit {
  constructor(public CartSidebarService: CartSidebarService) {}

  ngOnInit(): void {}
}
