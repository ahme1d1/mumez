import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  @Input() src: string = `assets/images/dummy/${
    Math.floor(Math.random() * (8 - 1)) + 1
  }.jpg`;

  @Input() alt = 'Image';
  @Input() ratio = '';

  constructor() {}

  ngOnInit(): void {}
}
