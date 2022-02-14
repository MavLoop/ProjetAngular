import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Game } from '../../common/model/Game';
import { Genre } from '../../common/model/Genre';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  @Input()
  id!: string | null;
  game!: Game;

  game1: Game = new Game(1, "Dying Light", "/assets/images/games/dying-light.jpg", "Good night, Good luck", 88, new Genre(1, "FPS"));
  game2: Game = new Game(2, "SpongeBob SquarePants: Battle for Bikini Bottom - Rehydrated", "/assets/images/games/spongebob.jpg", "Spongebob !!", 88, new Genre(1, "FPS"));
  game3: Game = new Game(3, "Animal Crossing: New Horizons", "/assets/images/games/animal-crossing.jpg", "Animal crossing sur nintendo Switch", 88, new Genre(1, "FPS"));
  games = [this.game1, this.game2, this.game3];

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      if(this.id !== null) {
        this.initGame(parseInt(this.id));
      } else {
        this.router.navigate(['/error']);
      }
    });
  }

  ngOnInit(): void {
  }

  initGame(id: number): void {
    for(let game of this.games) {
      if(game.id === id) {
        this.game = game;
      }
    }
    this.http.request('GET', '/api/platform/test').subscribe((data) => {
      console.log(data);
    });
  }
}
