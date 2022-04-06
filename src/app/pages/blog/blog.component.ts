import { Component, OnInit } from '@angular/core';

import SwiperCore, { SwiperOptions, Navigation, FreeMode } from 'swiper';
SwiperCore.use([Navigation, FreeMode]);
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  swiperAutoConfig: SwiperOptions = {
    slidesPerView: 'auto',
    navigation: true,
    spaceBetween: 15,
    freeMode: true,
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
      title: 'Changing Mats & Tables',
      icon: '/assets/images/categories/6.svg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
