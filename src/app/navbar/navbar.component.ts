import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHiking, faUser } from '@fortawesome/free-solid-svg-icons'
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { Gamer } from '../common/model/gamer';
import { TokenStorageService } from '../common/services/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  gamer?:Gamer;
  hasModeratorRole=false;
  hasGamerRole=false;
  isLoggedIn = false;
  constructor(private tokenStorageService: TokenStorageService,
    private router: Router,
    private library: FaIconLibrary,) {
      library.addIcons(faHiking, faUser);
     }

  ngOnInit(): void {
    this.tokenStorageService.estConnecte.subscribe(isConnect => {
      // this.isLoggedIn = !!this.tokenStorage.getToken();
      this.isLoggedIn = !!this.tokenStorageService.getUser();
      this.gamer = this.tokenStorageService.getUser();
      if (isConnect) {
        if (this.gamer?.admin == true) {
          this.hasModeratorRole = true;
          this.hasGamerRole = false;
        } else {
          this.hasModeratorRole = false;
          this.hasGamerRole = true;
        }
      }
    });
}

onLogout(): void {
  this.tokenStorageService.signOut();
  this.isLoggedIn = false;

  this.router.navigate(['/']);

}

}
