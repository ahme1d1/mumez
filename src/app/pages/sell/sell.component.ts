import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss'],
})
export class SellComponent implements OnInit {
  howItems: Array<any> = [
    {
      title: 'List your Products on Mumez',
      icon: 'assets/images/about/8.svg',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard',
    },
    {
      title: 'Buyer Orders on of your products',
      icon: 'assets/images/about/7.svg',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard',
    },
    {
      title: 'Pack and prepare to ship the order',
      icon: 'assets/images/about/3.svg',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard',
    },
    {
      title: 'Courier picks it up and delivers it to the buyer',
      icon: 'assets/images/about/6.svg',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard',
    },
    {
      title: 'You get paid through our website',
      icon: 'assets/images/about/5.svg',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
