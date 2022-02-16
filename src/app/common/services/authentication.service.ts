import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginDTO } from '../model/login-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  ROOT_URL = environment.PROJETFINAL_JEUXVIDEOS;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

    signin$(pseudo:string, password:string): Observable<any> {
    var uri = "login/signin";
    return this.http.post<any>(uri, {
      pseudo,password
    }, this.httpOptions);
  }
}


