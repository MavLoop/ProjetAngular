import { Component, OnInit } from '@angular/core';
import { Game } from '../common/model/Game';
import { Genre } from '../common/model/Genre';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //[new Game("Dying Light", "image", "Zombie FPS", 88, ["zombie", "FPS", "Survival"])]

  game: Game = new Game("Dying Light", "/assets/images/dying-light.jpg", "Good night, Good luck", 88, new Genre(1, "FPS"));

  public games = Array(50).fill(this.game);
  
  constructor() { }

  ngOnInit(): void {
  }

}
