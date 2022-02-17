import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Game } from 'src/app/common/model/game.model';
import { GameService } from 'src/app/common/services/game.service';
import { ReviewsService } from 'src/app/common/services/reviews.service';
import { Reviews } from 'src/app/common/model/reviews.model';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  id!: string | null;
  @Input()
  game!: Game;
  platforms!: string;
  reviews!: Reviews[];

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private gameService: GameService, private reviewsService: ReviewsService) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      if(this.id !== null) {
        this.initGame(parseInt(this.id));
        this.initReviews(parseInt(this.id));
      } else {
        this.router.navigate(['/error']);
      }
    });
  }

  ngOnInit(): void {
    
  }

  initReviews(id: number) {
    this.reviewsService._searchAllByGameId(id).subscribe({
      next: (data) => { this.reviews = data },
      error: (error) => {console.log(error)}
    });
  }

  initGame(id: number): void {
    this.gameService.getGameById(id).subscribe((data) => {this.game = data; this.initPlatforms();});
  }

  initPlatforms() {
    let variable = '';
    for(let i = 0; i < this.game.platforms.length; i++) {
      variable += ' '+this.game.platforms[i].name;
      if(i!=this.game.platforms.length-1) {
        variable+= ',';
      }
    }
    this.platforms = variable;
  }
}
