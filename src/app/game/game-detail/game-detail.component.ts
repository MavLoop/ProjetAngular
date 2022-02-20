import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Game } from 'src/app/common/model/game.model';
import { GameService } from 'src/app/common/services/game.service';
import { ReviewsService } from 'src/app/common/services/reviews.service';
import { Reviews } from 'src/app/common/model/reviews.model';
import { TokenStorageService } from 'src/app/common/services/token-storage.service';
import { Gamer } from 'src/app/common/model/gamer';
import { Moderator } from 'src/app/common/model/moderator';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  id!: number;
  @Input()
  game!: Game;
  platforms!: string;
  reviews!: Reviews[];
  hasModeratorRole!: boolean;
  user!: Gamer | Moderator;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private gameService: GameService, private reviewsService: ReviewsService, private tokenStorageService: TokenStorageService) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      if (id !== null) {
        this.id = parseInt(id);
        this.initGame(parseInt(id));
        this.initReviews(parseInt(id));
      } else {
        this.router.navigate(['/error']);
      }
    });
  }

  ngOnInit(): void {
    this.voirSiConnecte();
    this.voirSiAdmin();
  }

  voirSiAdmin() {
    this.user = this.tokenStorageService.getUser();
    if(this.user.admin == true) {
      this.hasModeratorRole = true;
    } else {
      this.hasModeratorRole = false;
    }
  }

  voirSiConnecte() {
    this.tokenStorageService.estConnecte.subscribe(isConnect => {
      this.user = this.tokenStorageService.getUser();
      if (isConnect) {
        if (this.user.admin == true) {
          this.hasModeratorRole = true;
        }
        if (this.user.admin == false) {
          this.hasModeratorRole = false;
        }
      }
    });
  }

  initReviews(id: number) {
    this.reviewsService._searchAllByGameId(id).subscribe({
      next: (data) => { this.reviews = data },
      error: (error) => { console.log(error) }
    });
  }

  initGame(id: number): void {
    this.gameService.getGameById(id).subscribe({
      next: (data) => { this.game = data; this.initPlatforms(); },
      error: (error) => {console.log(error)}
    });
  }

  initPlatforms() {
    let variable = '';
    for (let i = 0; i < this.game.platforms.length; i++) {
      variable += ' ' + this.game.platforms[i].name;
      if (i != this.game.platforms.length - 1) {
        variable += ',';
      }
    }
    this.platforms = variable;
  }
}
