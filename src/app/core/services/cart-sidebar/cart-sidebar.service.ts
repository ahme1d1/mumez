import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class CartSidebarService {
  active: boolean = false;

  Open() {
    this.active = true;
    this.document.body.classList.add('overflow-hidden');
  }
  Close() {
    this.active = false;
    this.document.body.classList.remove('overflow-hidden');
  }
  constructor(@Inject(DOCUMENT) private document: Document) {}
}
