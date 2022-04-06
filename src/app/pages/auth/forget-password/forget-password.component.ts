import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
})
export class ForgetPasswordComponent implements OnInit {
  E164PhoneNumber = 'asdasda';
  @ViewChild('f') f: NgForm | undefined;
  constructor() {}

  ngOnInit(): void {}
}
