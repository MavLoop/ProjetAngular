import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Gamer } from './common/model/gamer';
import { Moderator } from './common/model/moderator';
import { TokenStorageService } from './common/services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Game Busters';
  user!: Gamer | Moderator;
  
  constructor(private tokenStorage: TokenStorageService, private titleService: Title) {
    this.titleService.setTitle(this.title);
   }

  ngOnInit(): void {
  this.user = this.tokenStorage.getUser();
  }

}
