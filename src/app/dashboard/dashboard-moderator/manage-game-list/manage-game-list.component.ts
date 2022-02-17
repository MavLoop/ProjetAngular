import { Component, Inject, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
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
    if (this.pageEvent !== undefined) {
      this.pageEvent.pageIndex = 0;
    }
    this.fetchGames();
    this.pageEvent = new PageEvent();
    this.pageEvent.pageIndex = 0;
    this.pageEvent.pageSize = this.pageSize;
  }

  ngOnInit(): void {
  }

  getPaginatorData(event: PageEvent): void {
    this.pageEvent = event;
    const low: number = event.pageIndex * event.pageSize;
    this.filteredGames = this.games.slice(low, low + event.pageSize);
  }

  deleteGame(id: number) {
    this.gameService.deleteGameById(id).subscribe(() => this.fetchGames());
  }

  fetchGames() {
    this.gameService.getAllGames().subscribe((data) => {
      this.games = data;
      this.filteredGames = this.games;
      this.filteredGames = this.games.slice(0, this.pageSize);
      this.length = this.games.length;
      this.pageEvent.length = this.length;
    });
  }

  sortData(sort: Sort) {
    console.log(this.pageEvent.pageIndex);
    const data = this.games.slice(this.pageEvent.pageIndex * this.pageEvent.pageSize, this.pageEvent.pageIndex * this.pageEvent.pageSize + this.pageEvent.pageSize);;
    if (!sort.active || sort.direction === '') {
      this.filteredGames = data;
      return;
    }
    this.filteredGames = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'editor':
          return compare(a.editor.name, b.editor.name, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}