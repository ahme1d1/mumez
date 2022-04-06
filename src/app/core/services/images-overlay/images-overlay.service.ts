import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ImagesOverlayService {
  overlayActive: boolean = false;
  constructor(@Inject(DOCUMENT) private document: Document) {}

  Open() {
    this.overlayActive = true;
    this.document.body.classList.add('overflow-hidden');
  }
  Close() {
    this.overlayActive = false;
    this.document.body.classList.remove('overflow-hidden');
  }
}
