import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGamerComponent } from './dashboard-gamer.component';

describe('DashboardGamerComponent', () => {
  let component: DashboardGamerComponent;
  let fixture: ComponentFixture<DashboardGamerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardGamerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardGamerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
