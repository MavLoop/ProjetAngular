import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { tap } from 'rxjs';
import { GameService } from 'src/app/common/services/game.service';

@Component({
  selector: 'app-upload-game-image',
  templateUrl: './upload-game-image.component.html',
  styleUrls: ['./upload-game-image.component.css']
})
export class UploadGameImageComponent implements OnInit {

  id!: number;
  fileName!: string;
  formData!: FormData;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private gameService: GameService) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      if (id !== null) {
        this.id = parseInt(id);
      } else {
        this.router.navigate(['/error']);
      }
    });
  }

  ngOnInit(): void { }

  patchGame() {
    console.log(this.formData);
    this.gameService.uploadGameImage(this.id, this.formData).pipe(tap({ next: () => this.router.navigate(["/moderator/games"]), error: (error) => console.log(error) })).subscribe();
  }

  onFileSelected(event: any) {

    const file: File = event.target.files[0];
    console.log(file);

    if (file) {
      this.fileName = file.name;

      const formData = new FormData();

      formData.append('file', file);

      this.formData = formData;
    }
  }
}
