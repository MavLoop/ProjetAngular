import { Component, Input, OnInit } from '@angular/core';
import { Reviews } from 'src/app/common/model/reviews.model';

@Component({
  selector: 'app-game-review',
  templateUrl: './game-review.component.html',
  styleUrls: ['./game-review.component.css']
})
export class GameReviewComponent implements OnInit {

  @Input()
  review!: Reviews;

  constructor() { }

  ngOnInit(): void {
  }

}
