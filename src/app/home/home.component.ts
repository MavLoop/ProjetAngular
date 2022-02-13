import { Component, OnInit } from '@angular/core';
import { Game } from '../common/model/Game';
import { Genre } from '../common/model/Genre';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //[new Game("Dying Light", "image", "Zombie FPS", 88, ["zombie", "FPS", "Survival"])]

  game: Game = new Game(1, "Dying Light", "/assets/images/games/dying-light.jpg", "Good night, Good luck", 88, new Genre(1, "FPS"));
  game2: Game = new Game(2, "SpongeBob SquarePants: Battle for Bikini Bottom - Rehydrated", "/assets/images/games/spongebob.jpg", "Spongebob !!", 88, new Genre(1, "FPS"));
  game3: Game = new Game(3, "Animal Crossing: New Horizons", "/assets/images/games/animal-crossing.jpg", "Animal crossing sur nintendo Switch", 88, new Genre(1, "FPS"));
  games = [this.game, this.game2, this.game3];

  constructor(private titleService : Title) {
    this.titleService.setTitle("Game Busters");
    this.init();
  }

  init() {
    this.games.fill(this.game2, 5, 49);
  }

  ngOnInit(): void {
  }

}
