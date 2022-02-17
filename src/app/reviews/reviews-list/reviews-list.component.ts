import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { faCheckCircle, faCircle } from '@fortawesome/free-solid-svg-icons';
import { Moderator } from 'src/app/common/model/moderator';
import { Reviews } from 'src/app/common/model/reviews.model';
import { ReviewsService } from 'src/app/common/services/reviews.service';
import { TokenStorageService } from 'src/app/common/services/token-storage.service';

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.css']
})
export class ReviewsListComponent implements OnInit {

  idReviews!:Number;
  idModerator!:Number;
  moderator!:Moderator;

  length!: number;
  pageSize: number = 5;
  reviews?:Reviews;
  reviewss!:Reviews[];
  filteredReviewss!: Reviews[];
  displayedColumns: string[] = ["SendingDate", 'Nom du jeu', 'Pseudo du Joueur', 'Note', 'Statut', 'Information', 'Operations'];


  constructor(private reviewsService: ReviewsService, 
    private tokenStorageService: TokenStorageService,
    private library: FaIconLibrary,
    ) {
      library.addIcons(faQuestionCircle, faCheckCircle);
   }

  ngOnInit(): void {
    this.moderator = this.tokenStorageService.getUser();
    if(this.moderator != null){
      console.log(this.moderator)
      this.idModerator = this.moderator.id;
    }
    this.initReviews();
  }

  okByModerator(idReviews:number): void {
    this.reviewsService._moderationReviews$( idReviews, this.idModerator ).subscribe({
      next: (data: any) => { 
        this.reviews = data;
      },
      error: (error => console.error(error))
    });
  }

  getPaginatorData(event: PageEvent): void {
    const low: number = event.pageIndex * event.pageSize;
    console.log('Low : '+low, 'High : '+(low + event.pageSize));
    this.filteredReviewss = this.reviewss.slice(low, low + event.pageSize);
  }

  initReviews() {
    this.reviewsService._searchAllReviews$().subscribe((data) => {
      this.reviewss = data; 

      this.filteredReviewss =  this.reviewss;

      this.filteredReviewss = this.reviewss.slice(0, this.pageSize); 
      this.length = this.reviewss.length});
  }

  sortReviewssBySendingDate(){
    // ??
  }

  sortReviewssByGameName(){
    // ??
  }

  sortReviewssByPseudo(){
    // ??
  }

  sortReviewssByNote(){
    // ??
  }

}
