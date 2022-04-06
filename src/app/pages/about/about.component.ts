import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  whyItems: Array<any> = [
    {
      title: 'The widest product range',
      icon: 'assets/images/about/3.svg',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard',
    },
    {
      title: 'A superior site experience',
      icon: 'assets/images/about/4.svg',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard',
    },
    {
      title: 'Best price guarantee',
      icon: 'assets/images/about/5.svg',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard',
    },
    {
      title: 'Free local delivery and easy returns',
      icon: 'assets/images/about/6.svg',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard',
    },
    {
      title: 'A rewarding loyalty program',
      icon: 'assets/images/about/7.svg',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard',
    },
    {
      title: 'A supportive community',
      icon: 'assets/images/about/8.svg',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
