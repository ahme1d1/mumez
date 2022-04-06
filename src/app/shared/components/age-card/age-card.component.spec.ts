import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeCardComponent } from './age-card.component';

describe('AgeCardComponent', () => {
  let component: AgeCardComponent;
  let fixture: ComponentFixture<AgeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
