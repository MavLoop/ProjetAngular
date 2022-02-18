import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Gamer } from '../model/gamer';
import { Moderator } from '../model/moderator';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class GamerGuard implements CanActivate {

  user!: Gamer | Moderator

  constructor(private tokenStorageService: TokenStorageService, private router: Router) { }

  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.user = this.tokenStorageService.getUser();
    console.log(this.user)
    if(this.user == null || undefined) {
      return this.router.navigate(['/error-not-moderator']);
    }else if (this.user.admin === false) {
      return true;
    } else {
      return this.router.navigate(['/error-not-gamer']);
    }
  }
  
}
