import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Editor } from '../model/editor.model';
import { Genre } from '../model/genre.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  ROOT_URL = environment.PROJETFINAL_JEUXVIDEOS;
  constructor(private http: HttpClient) { }

  getAllGenres(): Observable<Genre[]>{
    return this.http.get<Genre[]>(`${this.ROOT_URL}/api/genres`);
  }
  getAllEditors(): Observable<Editor[]>{
    return this.http.get<Editor[]>(`${this.ROOT_URL}/api/editors`);
  }
}
