import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Game } from 'src/app/common/model/game.model';
import { Gamer } from 'src/app/common/model/gamer';
import { GamerDto } from 'src/app/common/model/gamer-dto';
import { Moderator } from 'src/app/common/model/moderator';
import { ReviewsDto } from 'src/app/common/model/reviews-dto.model';
import { GameService } from 'src/app/common/services/game.service';
import { ReviewsService } from 'src/app/common/services/reviews.service';
import { TokenStorageService } from 'src/app/common/services/token-storage.service';

@Component({
  selector: 'app-add-reviews',
  templateUrl: './add-reviews.component.html',
  styleUrls: ['./add-reviews.component.css']
})
export class AddReviewsComponent implements OnInit {

  gamer:Gamer = new Gamer();
  submitted = false;

  @Input()
  id!: string | null;

  addReviewsDtoForm: FormGroup = this.fb.group({
    description: ['', [Validators.required, Validators.maxLength(500)]],
    rating: ['', [Validators.required, Validators.min(0), Validators.max(20), Validators.pattern('[0-9]*')]]
  });

  constructor(private fb: FormBuilder, private reviewsService: ReviewsService,
    private tokenStorageService: TokenStorageService,
    private route: ActivatedRoute, private router: Router,) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      if (this.id === null) {
        this.router.navigate(['/error-not-connecting']);
      }
    });

  }

  ngOnInit(): void {
    this.gamer = this.tokenStorageService.getUser();
    if (this.gamer == null) {
      this.router.navigate(['/error-not-connecting']);
    }
  }

  get description(): FormControl {
    return this.addReviewsDtoForm.get('description') as FormControl;
  }

  get rating(): FormControl {
    return this.addReviewsDtoForm.get('rating') as FormControl;
  }

  addReviews() {

    this.gamer = this.tokenStorageService.getUser();
    console.log(this.gamer);

    if(this.gamer.id === null){
      this.router.navigate(['/error-not-connecting']);
    }

    const reviewsDto: ReviewsDto = {
      description: this.addReviewsDtoForm.value.description,
      rating: this.addReviewsDtoForm.value.rating,
      gamerId: this.gamer.id,
      gameId: Number(this.id)
      // gameId: parseInt(this.id);
      // route :id et récupérer dans le composant ici
    }
    console.log(reviewsDto);

    this.reviewsService._addReviews$(reviewsDto).subscribe({
        next: (data: any) => { 
          console.log(data);
          this.submitted = true;
        },
        error: (error => console.error(error))
      });

  }
}
