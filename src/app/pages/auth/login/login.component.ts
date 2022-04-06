import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  E164PhoneNumber = 'asdasda';
  @ViewChild('f') f: NgForm | undefined;

  constructor() {}

  ngOnInit(): void {}
}
