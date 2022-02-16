import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGameListComponent } from './manage-game-list.component';

describe('ManageGameListComponent', () => {
  let component: ManageGameListComponent;
  let fixture: ComponentFixture<ManageGameListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageGameListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageGameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
