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

  test!: GameRequest | undefined;

  @Input()
  filteredGames!: GameTest[];
  public filter!: string;


  constructor(private titleService : Title, private gameListService: GameListService) {
    this.titleService.setTitle("Game Busters");
    this.test = gameListService.request;
    if(this.test !== undefined) {
      this.filteredGames = this.test.games;
    }
  }

  ngOnInit(): void {
    
  }

  updateFilter() {
    //this.filteredGames = this.games.filter(value =>  value.title.toLowerCase().includes(this.filter.toLowerCase()));
  }

}
