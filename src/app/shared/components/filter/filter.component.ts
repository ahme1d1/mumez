import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  overlay: boolean = false;
  value: number = 100;
  areaValue: number = 100;
  options: Options = {
    floor: 0,
    step: 10,
    ceil: 10000,
  };
  options2: Options = {
    step: 10,
    floor: 0,
    ceil: 10000,
  };
  PriceValue: number = 0;
  highValue: number = 20000;
  highValue2: number = 20000;
  dummyData: Array<any> = [
    {
      title: 'Category',
      items: ['Feeding', 'Gear', 'Toys', 'Outdoor', 'Bath', 'Safety'],
    },
    {
      title: 'Age',
      items: [
        'Baby 0-1 Year (41)',
        'Toddler 2-4 Years (35)',
        'Adventurers 5-7 Years (2)',
        'Pioneers 8+ (1)',
      ],
    },
    {
      title: 'Gender',
      items: ['Boy (10)', 'Girl (6)', 'Unisex (39)'],
    },
    {
      title: 'brand',
      items: ['Pampers', 'Water Wipes', 'Huggies'],
    },
  ];

  price(event: any) {}
  constructor() {}

  ngOnInit(): void {}
}
