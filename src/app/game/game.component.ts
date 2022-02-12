import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../common/Game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Input()
  public game!: Game;

  constructor() { }

  ngOnInit(): void {
  }

}
