import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Injectable({
  providedIn: 'root',
})
export class ShareService {
  shareActive: boolean = false;
  constructor(@Inject(DOCUMENT) private document: Document) {}

  Open() {
    this.shareActive = true;
    this.document.body.classList.add('overflow-hidden');
  }
  Close() {
    this.shareActive = false;
    this.document.body.classList.remove('overflow-hidden');
  }
}
