import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  E164PhoneNumber = 'asdasda';
  @ViewChild('f') f: NgForm | undefined;

  constructor() {}

  ngOnInit(): void {}
}
