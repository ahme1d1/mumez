import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
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
  subCategories: Array<any> = [
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
  ];
  mainCategories: Array<any> = [
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
  ];
  constructor() {}

  ngOnInit(): void {}
}
