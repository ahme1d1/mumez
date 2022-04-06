import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

import SwiperCore, {
  SwiperOptions,
  Navigation,
  Pagination,
  FreeMode,
} from 'swiper';
SwiperCore.use([Navigation, Pagination, FreeMode]);
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  value: number = 100;
  options: Options = {
    floor: 0,
    step: 10,
    ceil: 10000,
  };

  PriceValue: number = 0;
  highValue: number = 20000;
  swiperFullConfig: SwiperOptions = {
    slidesPerView: 1,
    navigation: true,
    pagination: { clickable: true },
    spaceBetween: 15,
  };
  swiperAutoConfig: SwiperOptions = {
    slidesPerView: 'auto',
    navigation: true,
    spaceBetween: 15,
    freeMode: true,
  };
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
  categoriesSwiperConfig: SwiperOptions = {
    spaceBetween: 10,
    slidesPerView: 1,
    navigation: true,
    breakpoints: {
      // when window width is >= 320px
      200: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      340: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      490: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      600: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
      700: {
        slidesPerView: 6,
        spaceBetween: 15,
      },
      780: {
        slidesPerView: 7,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 8,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: 9,
        spaceBetween: 20,
      },
    },
  };
  dummyCategories: Array<any> = [
    {
      title: 'Diapers',
      icon: '/assets/images/categories/1.svg',
    },
    {
      title: 'Wipes',
      icon: '/assets/images/categories/2.svg',
    },
    {
      title: 'Creams & Powder',
      icon: '/assets/images/categories/3.svg',
    },
    {
      title: 'Potty Training',
      icon: '/assets/images/categories/4.svg',
    },
    {
      title: 'Wipes2',
      icon: '/assets/images/categories/5.svg',
    },
    {
      title: 'Changing Mats & Tables',
      icon: '/assets/images/categories/6.svg',
    },
    {
      title: 'Potty Training2',
      icon: '/assets/images/categories/7.svg',
    },
    {
      title: 'Changing Mats & Tables2',
      icon: '/assets/images/categories/8.svg',
    },
    {
      title: 'Creams & Powder2',
      icon: '/assets/images/categories/1.svg',
    },
  ];
  dummyAges: Array<any> = [
    '0  to  1  years',
    '1  to  2  years',
    '2  to  3 years',
    '3  to  4 years',
  ];
  dummyBrands: Array<any> = [
    'Brand 1',
    'Brand 2',
    'Brand 3',
    'Brand 4',
    'Brand 5',
  ];
  dummySort: Array<any> = [
    'Most Popular',
    'From Low to High',
    'From High to Low',
  ];
  constructor() {}

  ngOnInit(): void {}
  price(event: any) {}
}
