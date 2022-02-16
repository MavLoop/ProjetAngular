import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from 'src/app/common/model/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameListService {

  constructor(private http: HttpClient) { }

  fetchGames(): Observable<Game[]> {
    return this.http.get<Game[]>('/game/all');
  }
}
