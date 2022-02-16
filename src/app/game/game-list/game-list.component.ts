import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Game } from 'src/app/common/model/game.model';
//import { Game } from '../../common/model/Game';
//import { Genre } from '../../common/model/Genre';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  @Input()
  filteredGames!: Game[];
  public filter!: string;

  //[new Game("Dying Light", "image", "Zombie FPS", 88, ["zombie", "FPS", "Survival"])]
/*
  game: Game = new Game(1, "Dying Light", "/assets/images/games/dying-light.jpg", "Good night, Good luck", 88, new Genre(1, "FPS"));
  game2: Game = new Game(2, "SpongeBob SquarePants: Battle for Bikini Bottom - Rehydrated", "/assets/images/games/spongebob.jpg", "Spongebob !!", 88, new Genre(1, "FPS"));
  game3: Game = new Game(3, "Animal Crossing: New Horizons", "/assets/images/games/animal-crossing.jpg", "Animal crossing sur nintendo Switch", 88, new Genre(1, "FPS"));
  games = [this.game, this.game2, this.game3];*/

  constructor(private titleService : Title) {
    this.titleService.setTitle("Game Busters");
    this.init();
  }

  init() {
    //this.games.fill(this.game2, 5, 49);
  }

  ngOnInit(): void {
   // this.filteredGames = this.games;
  }

  updateFilter() {
    //this.filteredGames = this.games.filter(value =>  value.title.toLowerCase().includes(this.filter.toLowerCase()));
  }

}
