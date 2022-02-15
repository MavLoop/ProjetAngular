import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BusinessModel } from '../model/business-model.model';
import { Classification } from '../model/classification.model';
import { Editor } from '../model/editor.model';
import { Genre } from '../model/genre.model';
import { Platform } from '../model/platform.model';

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

  getAllCassifications(): Observable<Classification[]>{
    return this.http.get<Classification[]>(`${this.ROOT_URL}/api/classifications`);
  }
  
  getAllPlatforms(): Observable<Platform[]>{
    return this.http.get<Platform[]>(`${this.ROOT_URL}/api/platforms`);
  }
  getAllBusinessModels(): Observable<BusinessModel[]>{
    return this.http.get<BusinessModel[]>(`${this.ROOT_URL}/api/businessModels`);
  }

  

}
