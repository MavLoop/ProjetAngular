import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadGameImageComponent } from './upload-game-image.component';

describe('UploadGameImageComponent', () => {
  let component: UploadGameImageComponent;
  let fixture: ComponentFixture<UploadGameImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadGameImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadGameImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
