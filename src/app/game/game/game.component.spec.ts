import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameDescriptionPipe } from 'src/app/common/pipes/game-description.pipe';
import { GameComponent } from './game.component';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeFr, 'fr-FR', localeFrExtra);

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        GameComponent,
        GameDescriptionPipe
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    component.game = {
      id: 1,
      name:'GTFO',
      description:'une description',
      businessModel: {id: 1, name:'Pay to play'},
      classification: {id: 1, name: 'PEGI 12'},
      editor: {id: 1, name: '10 Chambers'},
      genre: {id: 1, name: 'fps'},
      image: '1.jpg',
      platforms: [{id: 1, name: 'pc'}],
      releaseDate: new Date()
    }
    console.log(component.game);
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });*/
});
