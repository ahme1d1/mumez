import { TestBed } from '@angular/core/testing';

import { ImagesOverlayService } from './images-overlay.service';

describe('ImagesOverlayService', () => {
  let service: ImagesOverlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagesOverlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
