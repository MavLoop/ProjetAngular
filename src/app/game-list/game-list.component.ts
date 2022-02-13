import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../common/model/Game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  @Input()
  public games!: Game[];
  filteredGames!: Game[];
  public filter!: string;

  constructor() { }

  ngOnInit(): void {
    this.filteredGames = this.games;
  }

  updateFilter() {
    this.filteredGames = this.games.filter(value =>  value.title.toLowerCase().includes(this.filter.toLowerCase()));
  }

}
