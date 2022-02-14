import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  ROOT_URL = environment.PROJETFINAL_JEUXVIDEOS;

  constructor(private http: HttpClient) { }

  

}
