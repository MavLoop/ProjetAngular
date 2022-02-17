import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Game } from 'src/app/common/model/game.model';
import { GameService } from 'src/app/common/services/game.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  @Input()
  id!: string | null;
  game!: Game;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private gameService: GameService) {
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
    this.gameService.getGameById(id).subscribe((data) => {this.game = data});
  }

}
