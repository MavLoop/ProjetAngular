import { Component, OnInit, ViewChild } from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { ReactiveFormsModule } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCheckCircle, faCircle, faQuestion } from '@fortawesome/free-solid-svg-icons';
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

  idReviews!: Number;
  idModerator!: Number;
  moderator!: Moderator;
  length!:number;

  pageEvent!: PageEvent;
  pageSize: number = 10;
  reviews?: Reviews;
  reviewss: Reviews[] = [];
  filteredReviewss!: Reviews[];
  displayedColumns: string[] = ["SendingDate", 'Nom du jeu', 'Pseudo du Joueur', 'Note', 'Statut', 'Information', 'Operations'];


  constructor(private reviewsService: ReviewsService,
    private tokenStorageService: TokenStorageService,
    private library: FaIconLibrary,
    private _liveAnnouncer: LiveAnnouncer,
  ) {
    library.addIcons(faQuestion, faCheckCircle);
    if (this.pageEvent === undefined) {
      this.initReviews();
      this.pageEvent = new PageEvent();
      this.pageEvent.pageIndex = 0;
      this.pageEvent.pageSize = this.pageSize;
    }

  }


  ngOnInit(): void {
    this.moderator = this.tokenStorageService.getUser();
    if (this.moderator != null) {
      console.log(this.moderator)
      this.idModerator = this.moderator.id;
    }

  }

  okByModerator(idReviews: number): void {
    console.log(this.idModerator)
    this.reviewsService._moderationReviews$(idReviews, this.idModerator).subscribe({
      next: (data: any) => {
        this.reviews = data;
        console.log(data);
        this.initReviews();
      },
      error: (error => console.error(error))
    });
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

      this.reviewss = data;

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
