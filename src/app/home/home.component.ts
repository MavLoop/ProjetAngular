import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Gamer } from '../common/model/gamer';
import { Moderator } from '../common/model/moderator';
import { TokenStorageService } from '../common/services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user!: Gamer | Moderator;
  isLoggedIn: boolean = false;

  constructor(private tokenStorageService: TokenStorageService, private router: Router) {
    // // override the route reuse strategy
    // this.router.routeReuseStrategy.shouldReuseRoute = function () {
    //   return false;
    // }

    // this.router.events.subscribe((evt) => {
    //   if (evt instanceof NavigationEnd) {
    //     // trick the Router into believing it's last link wasn't previously loaded
    //     this.router.navigated = false;
    //     // if you need to scroll back to top, here is the right place
    //     window.scrollTo(0, 0);
    //   }
    // });
  }

  ngOnInit(): void {
    this.tokenStorageService.estConnecte.subscribe(isConnect => {
      // this.isLoggedIn = !!this.tokenStorage.getToken();
      this.isLoggedIn = isConnect;
      this.user = this.tokenStorageService.getUser();
    })
  }
}
