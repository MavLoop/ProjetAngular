import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BusinessModel } from '../model/business-model.model';
import { Classification } from '../model/classification.model';
import { Editor } from '../model/editor.model';
import { GameDto } from '../model/gameDto.model';
import { Genre } from '../model/genre.model';
import { Platform } from '../model/platform.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  ROOT_URL = environment.PROJETFINAL_JEUXVIDEOS;
  constructor(private http: HttpClient) { }

  getAllGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(`${this.ROOT_URL}/api/genre/all`);
  }

  getAllEditors(): Observable<Editor[]> {
    return this.http.get<Editor[]>(`${this.ROOT_URL}/api/editor/all`);
  }

  getAllCassifications(): Observable<Classification[]> {
    return this.http.get<Classification[]>(`${this.ROOT_URL}/api/classification/all`);
  }

  getAllPlatforms(): Observable<Platform[]> {
    return this.http.get<Platform[]>(`${this.ROOT_URL}/api/platform/all`);
  }
  getAllBusinessModels(): Observable<BusinessModel[]> {
    return this.http.get<BusinessModel[]>(`${this.ROOT_URL}/api/businessModel/all`);
  }

  addGame(gameDto: GameDto) {
    return this.http.post<GameDto>(`${this.ROOT_URL}/api/game/save`, gameDto).subscribe({
      next: (data) => {
        console.log(`réponse => ${data}`);
        console.log("type réponse => " + typeof data);
      },
      error: (error => console.error(error))
    });
  }
}
