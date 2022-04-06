import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss'],
})
export class SubCategoryComponent implements OnInit {
  dummySort: Array<any> = [
    'Most Popular',
    'From Low to High',
    'From High to Low',
  ];
  constructor() {}

  ngOnInit(): void {}
}
