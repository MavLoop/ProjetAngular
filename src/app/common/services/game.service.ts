import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BusinessModel } from '../model/business-model.model';
import { Classification } from '../model/classification.model';
import { Editor } from '../model/editor.model';
import { Game } from '../model/game.model';
import { GameDto } from '../model/gameDto.model';
import { Genre } from '../model/genre.model';
import { Platform } from '../model/platform.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  constructor(private http: HttpClient) { }

  getAllGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(`/genre/all`);
  }

  getAllEditors(): Observable<Editor[]> {
    return this.http.get<Editor[]>(`/editor/all`);
  }

  getAllCassifications(): Observable<Classification[]> {
    return this.http.get<Classification[]>(`/classification/all`);
  }

  getAllPlatforms(): Observable<Platform[]> {
    return this.http.get<Platform[]>(`/platform/all`);
  }
  getAllBusinessModels(): Observable<BusinessModel[]> {
    return this.http.get<BusinessModel[]>(`/businessModel/all`);
  }

  getGameById(id: number): Observable<Game> {
    return this.http.get<Game>(`/game/${id}`);
  }

  addGame(gameDto: GameDto): Observable<Game> {
    return this.http.post<Game>(`/game/save`, gameDto);
  }

  updateGame(gameDto: GameDto, id: number): Observable<Game> {
    return this.http.put<Game>(`/game/update/${id}`, gameDto);
  }

  getAllGames(): Observable<Game[]> {
    return this.http.get<Game[]>('/game/all');
  }

  getGameById(id: number): Observable<Game> {
    return this.http.get<Game>('/game/'+id);
  }

  uploadGameImage(id: number, formData: FormData): Observable<any> {
    return this.http.post('/game/image/'+id, formData);
  }

  deleteGameById(id: number) {
    return this.http.delete('/game/'+id+'/delete');
  }

  _searchGameById$(id: string): Observable<Game> {
    var uri = "game/" + id;
    return this.http.get<Game>(uri);
  }

  _searchAllGame$(): Observable<Game> {
    var uri = "game/all";
    return this.http.get<Game>(uri);
  }

  _deleteGame$(id: string): Observable<any> {
    var uri = id + "/delete";
    return this.http.delete<any>(uri);
  }
  
}
