import { Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions, Navigation, Pagination } from 'swiper';
SwiperCore.use([Navigation, Pagination]);
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  qty: number = 1;

  productsSwiperConfig: SwiperOptions = {
    spaceBetween: 10,
    slidesPerView: 1,
    navigation: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      550: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      800: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
    },
  };

  constructor() {}

  ngOnInit(): void {}
  updateCartDetail(parameter: string) {
    if (parameter === 'plus') {
      this.qty++;
    } else if (parameter === 'minus' && this.qty > 1) {
      this.qty--;
    }
  }
}
