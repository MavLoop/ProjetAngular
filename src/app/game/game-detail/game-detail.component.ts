import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GameTest } from 'src/app/common/model/game-model/GameTest';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  @Input()
  id!: string | null;
  gameId!: number;
  game!: GameTest;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      if(this.id !== null) {
        //this.initGame(parseInt(this.id));
        this.gameId = parseInt(this.id);
      } else {
        this.router.navigate(['/error']);
      }
    });
  }

  ngOnInit(): void {
    this.initGame(this.gameId);
  }

  initGame(id: number): void {
    let URI = '/platform/test'
    this.http.request('GET', URI).subscribe((data) => {
      console.log(data);
    });
  }
}
