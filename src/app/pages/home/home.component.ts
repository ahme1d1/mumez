import { Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions, Navigation, Pagination } from 'swiper';
SwiperCore.use([Navigation, Pagination]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  swiperFullConfig: SwiperOptions = {
    slidesPerView: 1,
    navigation: true,
    pagination: { clickable: true },
    spaceBetween: 15,
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
      title: 'Wipes',
      icon: '/assets/images/categories/5.svg',
    },
    {
      title: 'Changing Mats & Tables',
      icon: '/assets/images/categories/6.svg',
    },
    {
      title: 'Potty Training',
      icon: '/assets/images/categories/7.svg',
    },
    {
      title: 'Changing Mats & Tables',
      icon: '/assets/images/categories/8.svg',
    },
    {
      title: 'Creams & Powder',
      icon: '/assets/images/categories/1.svg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
