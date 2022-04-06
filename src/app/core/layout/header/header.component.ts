import { Component, OnInit } from '@angular/core';
import { CartSidebarService } from '@core/services/cart-sidebar/cart-sidebar.service';
import { ifAnimation } from '@core/animations/if-animation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [ifAnimation],
})
export class HeaderComponent implements OnInit {
  activeMenu: String = '';
  activeCategory: String = 'Diapers';
  categories: Array<any> = [
    {
      title: 'Diapers',
      icon: '/assets/images/categories/1.svg',
    },
    {
      title: 'Feeding',
      icon: '/assets/images/categories/2.svg',
    },
    {
      title: 'Gear',
      icon: '/assets/images/categories/3.svg',
    },
    {
      title: 'Toys',
      icon: '/assets/images/categories/4.svg',
    },
    {
      title: 'Outdoor',
      icon: '/assets/images/categories/5.svg',
    },
    {
      title: 'Bath',
      icon: '/assets/images/categories/6.svg',
    },
    {
      title: 'Safety',
      icon: '/assets/images/categories/7.svg',
    },
    {
      title: 'Clothes',
      icon: '/assets/images/categories/8.svg',
    },
    {
      title: 'Bedroom',
      icon: '/assets/images/categories/1.svg',
    },
    {
      title: 'Mumz',
      icon: '/assets/images/categories/2.svg',
    },
  ];
  constructor(public CartSidebarService: CartSidebarService) {}

  ngOnInit(): void {}
  navEnter(e: any) {
    e.target.classList.add('is-active');
    this.activeMenu = 'true';
  }
  navLeave(e: any) {
    e.target.classList.remove('is-active');
    this.activeMenu = '';
  }
  categoryEnter(title: string) {
    this.activeMenu = title;
  }
  categoryLeave(title: string) {
    this.activeMenu = '';
  }
  changeCategory(active: String) {
    this.activeCategory = active;
  }
  activeMenuClose() {
    this.activeMenu = '';
  }
}
