import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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

  addGame(gameDto: GameDto) {
    return this.http.post<GameDto>(`/game/save`, gameDto).subscribe({
      next: (data: any) => {
        console.log(`réponse => ${data}`);
        console.log("type réponse => " + typeof data);
      },
      error: (error => console.error(error))
    });
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
}
