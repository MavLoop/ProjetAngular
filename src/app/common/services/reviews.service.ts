import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ReviewsDto } from '../model/reviews-dto.model';
import { Reviews } from '../model/reviews.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  ROOT_URL = environment.PROJETFINAL_JEUXVIDEOS;
  
  constructor(private http: HttpClient) { }

  _addReviews$(reviewsDto: ReviewsDto): Observable<ReviewsDto> {
    var uri = "reviews/save";
    return this.http.post<ReviewsDto>(uri, reviewsDto);
  }

  _searchReviewsById$(id:string): Observable<Reviews> {
    var uri = "reviews/"+ id;
    return this.http.get<Reviews>(uri);
  }

  _searchAllReviews$(): Observable<Reviews[]> {
    var uri = "reviews/all";
    return this.http.get<Reviews[]>(uri);
  }

  _deleteReviews$(id:string): Observable<any> {
    var uri = "reviews/"+ id +"/delete";
    return this.http.get<any>(uri);
  }

  _moderationReviews$(idReviews:Number, idModerator:Number): Observable<Reviews> {
    var uri = idReviews+ "/moderator/"+ idModerator;
    return this.http.get<Reviews>(uri);
  }
}
