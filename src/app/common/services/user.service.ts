import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gamer } from '../model/gamer';
import { environment } from 'src/environments/environment';
import { PasswordDto } from '../model/password-dto';
import { Moderator } from '../model/moderator';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  ROOT_URL = environment.PROJETFINAL_JEUXVIDEOS;

  constructor(private http: HttpClient) { }

  httpHeaders = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')


    _searchGamerById$(id: string): Observable<Gamer> {
      var uri = "user/gamer/" + id;
      return this.http.get(`${this.ROOT_URL}/${uri}`);
    }

    addGamer$(gamer: Gamer): Observable<Gamer> {
      var uri = "user/gamer/save";
      return this.http.post<Gamer>(`${this.ROOT_URL}/${uri}`, gamer);
      //,httpOptions)
    }

    _patchGamerById$(id: string, password: PasswordDto): Observable<any> {
      var uri = "user/gamer/" + id + "/patchPassword";
      return this.http.put<any>(`${this.ROOT_URL}/${uri}`, password);
    }

    _searchModeratorById$(id: string): Observable<Moderator> {
      var uri = "user/moderator/" + id;
      return this.http.get(`${this.ROOT_URL}/${uri}`);
    }

    addModerator$(moderator: Moderator): Observable<Moderator> {
      var uri = "user/moderator/save";
      return this.http.post<Moderator>(`${this.ROOT_URL}/${uri}`, moderator);
      //,httpOptions)
    }

    _patchModeratorById$(id: string, password: PasswordDto): Observable<any> {
      var uri = "user/moderator/" + id + "/patchPassword";
      return this.http.put<any>(`${this.ROOT_URL}/${uri}`, password);
    }
}
