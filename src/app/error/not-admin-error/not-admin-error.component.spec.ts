import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAdminErrorComponent } from './not-admin-error.component';

describe('NotAdminErrorComponent', () => {
  let component: NotAdminErrorComponent;
  let fixture: ComponentFixture<NotAdminErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotAdminErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotAdminErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
