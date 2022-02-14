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

  signin$(loginDto: LoginDTO): Observable<any> {
    var uri = "login/signin";
    return this.http.post(this.ROOT_URL+`/${uri}`, {
      loginDto
    });
  }
}


