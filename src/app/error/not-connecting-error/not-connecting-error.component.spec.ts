import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotConnectingErrorComponent } from './not-connecting-error.component';

describe('NotConnectingErrorComponent', () => {
  let component: NotConnectingErrorComponent;
  let fixture: ComponentFixture<NotConnectingErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotConnectingErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotConnectingErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
