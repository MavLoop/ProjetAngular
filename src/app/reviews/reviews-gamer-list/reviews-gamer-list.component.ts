import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCheckCircle, faCircle } from '@fortawesome/free-solid-svg-icons';
import { Gamer } from 'src/app/common/model/gamer';
import { Reviews } from 'src/app/common/model/reviews.model';
import { ReviewsService } from 'src/app/common/services/reviews.service';
import { TokenStorageService } from 'src/app/common/services/token-storage.service';

@Component({
  selector: 'app-reviews-gamer-list',
  templateUrl: './reviews-gamer-list.component.html',
  styleUrls: ['./reviews-gamer-list.component.css']
})
export class ReviewsGamerListComponent implements OnInit {
  idGamer!:Number;
  gamer!:Gamer;
  length!:number;

  pageEvent!: PageEvent;
  pageSize: number = 10;
  reviewss: Reviews[] = [];
  filteredReviewss!: Reviews[];
  displayedColumns: string[] = ["SendingDate", 'Nom du jeu', 'Pseudo du Joueur', 'Note', 'Statut', 'Information', 'Operations'];


  constructor(private reviewsService: ReviewsService,
    private tokenStorageService: TokenStorageService,
    private library: FaIconLibrary,) {
      library.addIcons(faCircle, faCheckCircle);
      if (this.pageEvent === undefined) {
        this.initReviews();
        this.pageEvent = new PageEvent();
        this.pageEvent.pageIndex = 0;
        this.pageEvent.pageSize = this.pageSize;
      }
     }

  ngOnInit(): void {
    this.gamer = this.tokenStorageService.getUser();
    if (this.gamer != null) {
      console.log(this.gamer)
      this.idGamer = this.gamer.id;
    }
  }

  getPaginatorData(event: PageEvent): void {
    this.pageEvent = event;
    const low: number = event.pageIndex * event.pageSize;
    console.log('Low : ' + low, 'High : ' + (low + event.pageSize));
    this.filteredReviewss = this.reviewss.slice(low, low + event.pageSize);
    // console.log(this.sort);
    // if(this.sort.active) {
    //   this.sortData(this.sort);
    // }
  }

  async initReviews() {
    this.reviewsService._searchAllReviews$().subscribe((data) => {

      if(this.pageEvent.pageIndex > 0 && (this.length-1) % this.pageSize === 0) {
        --this.pageEvent.pageIndex;
      }

      data.forEach(element => {
        if(element.gamer.id === this.idGamer){
          this.reviewss.push(element);
        }
      });

      const reviewsFilterSendingDate = this.reviewss.sort(function compare(a, b) {
        if (a.sendingDate < b.sendingDate)
           return -1;
        if (a.sendingDate > b.sendingDate)
           return 1;
        return 0;
      });

      const reviewsFilterModerator = reviewsFilterSendingDate.sort(function compare(a, b) {
        if (a.moderator == null)
           return -1;
        if (a.moderator != null)
           return 1;
        return 0;
      });

      this.filteredReviewss = reviewsFilterModerator.slice(this.pageEvent.pageIndex * this.pageEvent.pageSize, 
        this.pageEvent.pageIndex * this.pageEvent.pageSize + this.pageSize);
      this.length = this.reviewss.length;
      this.pageEvent.length = this.length;
    });
  }

}
