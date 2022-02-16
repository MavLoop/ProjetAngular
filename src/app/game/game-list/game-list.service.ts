import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GameTest } from 'src/app/common/model/game-model/GameTest';
import { GameRequest } from 'src/app/common/model/game-model/Request';

@Injectable({
  providedIn: 'root'
})
export class GameListService {

  request?: GameRequest;
  games?: GameTest[];

  constructor(private http: HttpClient) {
    

    /*this.movies$ = http.get<ResultMovies>(url).pipe(
      tap(() => this.loading = false),
      map(response => response.results),
      map(movies => movies.sort((a, b) => a.episode_id - b.episode_id)) // réordonner les films par n° d'épisode
    );*/
  }

  fetchGames(): Observable<GameTest[]> {
    return this.http.get<GameTest[]>('/game/all');
  }
}
