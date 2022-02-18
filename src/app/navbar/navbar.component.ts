import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHiking, faUser } from '@fortawesome/free-solid-svg-icons'
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { Gamer } from '../common/model/gamer';
import { TokenStorageService } from '../common/services/token-storage.service';
import { Moderator } from '../common/model/moderator';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user!: Gamer | Moderator;
  hasModeratorRole!: boolean;

  isLoggedIn!: boolean;

  constructor(private tokenStorageService: TokenStorageService,
    private router: Router,
    private library: FaIconLibrary,) {
    library.addIcons(faHiking, faUser);

  }

  ngOnInit(): void {
    this.voirSiConnecte();
    this.voirSiAdmin();

  }

  voirSiAdmin() {
    this.user = this.tokenStorageService.getUser();
    console.log(this.user.admin + this.user.pseudo)
    if(this.user.admin == true) {
      this.hasModeratorRole = true;
    } else {
      this.hasModeratorRole = false;
    }
  }


  voirSiConnecte() {
    this.tokenStorageService.estConnecte.subscribe(isConnect => {
      // this.isLoggedIn = !!this.tokenStorage.getToken();
      this.isLoggedIn = !!this.tokenStorageService.getUser();
      this.user = this.tokenStorageService.getUser();
      if (isConnect) {
        if (this.user.admin == true) {
          this.hasModeratorRole = true;
        }
        if (this.user.admin == false) {
          this.hasModeratorRole = false;
        }
      }
    });
  }

  onLogout(): void {
    this.tokenStorageService.signOut();
    this.isLoggedIn = false;
    if(this.router.url === '/home'){
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/home']);
    }
    
  }

}
