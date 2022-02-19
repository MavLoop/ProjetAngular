import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsGamerListComponent } from './reviews-gamer-list.component';

describe('ReviewsGamerListComponent', () => {
  let component: ReviewsGamerListComponent;
  let fixture: ComponentFixture<ReviewsGamerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewsGamerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsGamerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
