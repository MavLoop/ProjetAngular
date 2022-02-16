import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Observable, ReplaySubject } from 'rxjs';
import { GameListService } from 'src/app/game/game-list/game-list.service';
import {DataSource} from '@angular/cdk/collections';
import { Game } from 'src/app/common/model/game.model';

@Component({
  selector: 'app-manage-game-list',
  templateUrl: './manage-game-list.component.html',
  styleUrls: ['./manage-game-list.component.css']
})
export class ManageGameListComponent implements OnInit {

  length!: number;
  pageSize: number = 5;

  // MatPaginator Output
  //pageEvent!: PageEvent;

  games!: Game[];
  filteredGames!: Game[];
  displayedColumns: string[] = ['image', 'name', 'editor', 'operations'];

  constructor(private gameListService: GameListService) {
    this.initGames();
  }

  ngOnInit(): void {

  }

  getPaginatorData(event: PageEvent): void {
    const low: number = event.pageIndex * event.pageSize;
    console.log('Low : '+low, 'High : '+(low + event.pageSize));
    this.filteredGames = this.games.slice(low, low + event.pageSize);
  }

  deleteGame(id: number) {

  }

  initGames() {
    this.gameListService.fetchGames().subscribe((data) => {this.games = data; this.filteredGames = this.games; this.filteredGames = this.games.slice(0, this.pageSize); this.length = this.games.length});
  }
}
