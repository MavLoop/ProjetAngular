import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Game } from 'src/app/common/model/game.model';
import { GameService } from 'src/app/common/services/game.service';
import { TokenStorageService } from 'src/app/common/services/token-storage.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games!: Game[];
  filteredGames!: Game[];
  public filter!: string;

  constructor(private gameService: GameService, private tokenStorageService: TokenStorageService) {
    this.gameService.getAllGames().subscribe((data) => {this.games = data; this.filteredGames = this.games});
  }
  
  ngOnInit(): void {
    // this.gamer = this.tokenStorageService.getUser();
    // if (this.gamer == null) {
    //   this.router.navigate(['/error-not-connecting']);
    // }
   }

  updateFilter() {
    this.filteredGames = this.games.filter((value: { name: string; }) => value.name.toLowerCase().includes(this.filter.toLowerCase()));
  }

}
