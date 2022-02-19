import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Gamer } from 'src/app/common/model/gamer';
import { Moderator } from 'src/app/common/model/moderator';
import { Reviews } from 'src/app/common/model/reviews.model';
import { ReviewsService } from 'src/app/common/services/reviews.service';
import { TokenStorageService } from 'src/app/common/services/token-storage.service';

@Component({
  selector: 'app-reviews-detail',
  templateUrl: './reviews-detail.component.html',
  styleUrls: ['./reviews-detail.component.css']
})
export class ReviewsDetailComponent implements OnInit {

  gameRecup = false;

  @Input()
  id!: string | null;
  reviews!: Reviews;
  user!: Gamer | Moderator;

  constructor(private reviewsService: ReviewsService,
    private tokenStorageService: TokenStorageService,
    private route: ActivatedRoute, private router: Router,) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      if (this.id !== null) {
        this.initReviews(parseInt(this.id));
          this.user = this.tokenStorageService.getUser();

      } else {
        this.router.navigate(['/error-not-connecting']);
      }
    });
    
  }

  ngOnInit(): void {
  }


  initReviews(id: number): void {
    this.reviewsService._searchReviewsById$(String(id)).subscribe((data) => { this.reviews = data });
  }
}
