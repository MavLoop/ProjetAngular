import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { GameService } from 'src/app/common/services/game.service';

@Component({
  selector: 'app-upload-game-image',
  templateUrl: './upload-game-image.component.html',
  styleUrls: ['./upload-game-image.component.css']
})
export class UploadGameImageComponent implements OnInit {

  id!: string;
  pdfSrc!: string;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private gameService: GameService) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      if(id === null) {
        this.router.navigate(['/error']);
      }
    });
  }

  ngOnInit(): void {
  }

  patchGame() {
    this.gameService.setGameImage(this.id.toString());
  }

  onFileSelected() {
    
  }
}
