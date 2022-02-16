import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GameTest } from 'src/app/common/model/game-model/GameTest';
import { GameRequest } from 'src/app/common/model/game-model/Request';
import { GameListService } from './game-list.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games!: GameTest[];
  request!: GameRequest;
  filteredGames!: GameTest[];
  public filter!: string;

  constructor(private titleService: Title, private gameListService: GameListService) {
    this.titleService.setTitle("Game Busters");
    //this.gameListService.fetchGames().subscribe((data) => this.initGames(data));
    this.gameListService.fetchGames().subscribe((data) => {this.games = data; this.filteredGames = this.games});
    
  }
  
  ngOnInit(): void { }

  updateFilter() {
    console.log(this.games);
    this.filteredGames = this.games.filter((value: { name: string; }) => value.name.toLowerCase().includes(this.filter.toLowerCase()));
    console.log(this.filteredGames)
  }

}
