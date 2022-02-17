import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gamer } from '../model/gamer';
import { environment } from 'src/environments/environment';
import { PasswordDto } from '../model/password-dto';
import { Moderator } from '../model/moderator';
import { GamerDto } from '../model/gamer-dto';
import { ModeratorDto } from '../model/moderator-dto';

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
      return this.http.get<Gamer>(uri);
    }

    addGamer$(gamerDto: GamerDto): Observable<Gamer> {
      var uri = "/user/gamer/save";
      return this.http.post<Gamer>(uri, gamerDto);
    }

    _patchGamerById$(id: string, password: PasswordDto): Observable<any> {
      var uri = "user/gamer/" + id + "/patchPassword";
      return this.http.put<any>(uri, password);
    }

    _searchModeratorById$(id: string): Observable<Moderator> {
      var uri = "user/moderator/" + id;
      return this.http.get<Moderator>(uri);
    }

    addModerator$(moderator: ModeratorDto): Observable<Moderator> {
      var uri = "user/moderator/save";
      return this.http.post<Moderator>(uri, moderator);
    }

    _patchModeratorById$(id: string, password: PasswordDto): Observable<any> {
      var uri = "user/moderator/" + id + "/patchPassword";
      return this.http.put<any>(uri, password);
    }
}
