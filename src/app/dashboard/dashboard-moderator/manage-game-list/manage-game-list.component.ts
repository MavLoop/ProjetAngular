import { Component, Inject, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Game } from 'src/app/common/model/game.model';
import { GameService } from 'src/app/common/services/game.service';

@Component({
  selector: 'app-manage-game-list',
  templateUrl: './manage-game-list.component.html',
  styleUrls: ['./manage-game-list.component.css']
})
export class ManageGameListComponent implements OnInit {

  length!: number;
  pageSize: number = 5;
  pageEvent!: PageEvent;

  games!: Game[];
  filteredGames!: Game[];
  displayedColumns: string[] = ['image', 'name', 'editor', 'operations'];

  constructor(private gameService: GameService) {
    if(this.pageEvent !== undefined) {
      this.pageEvent.pageIndex = 1;
    }
    this.initGames();
  }

  ngOnInit(): void {

  }

  getPaginatorData(event: PageEvent): void {
    this.pageEvent = event;
    const low: number = event.pageIndex * event.pageSize;
    console.log('Low : ' + low, 'High : ' + (low + event.pageSize));
    this.filteredGames = this.games.slice(low, low + event.pageSize);
  }

  deleteGame(id: number) {
    this.gameService.deleteGameById(id).subscribe(() => this.initGames());
  }

  initGames() {
    this.gameService.getAllGames().subscribe((data) => {this.games = data; this.filteredGames = this.games; this.filteredGames = this.games.slice(0, this.pageSize); this.length = this.games.length});
  }
}