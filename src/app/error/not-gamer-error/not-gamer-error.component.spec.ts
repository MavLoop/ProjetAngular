import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotGamerErrorComponent } from './not-gamer-error.component';

describe('NotGamerErrorComponent', () => {
  let component: NotGamerErrorComponent;
  let fixture: ComponentFixture<NotGamerErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotGamerErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotGamerErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
