import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BusinessModel } from 'src/app/common/model/business-model.model';
import { Classification } from 'src/app/common/model/classification.model';
import { Editor } from 'src/app/common/model/editor.model';
import { GameDto } from 'src/app/common/model/gameDto.model';
import { Genre } from 'src/app/common/model/genre.model';
import { Platform } from 'src/app/common/model/platform.model';
import { GameService } from 'src/app/common/services/game.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {
  editors!: Editor[];
  genres!: Genre[];
  classifications!: Classification[];
  platforms!: Platform[];
  businessModels!: BusinessModel[];
  isAddMode!: boolean;
  idGame!: number;
  success: string = 'null';
  error: string = 'null';



  addGameForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    editorName: ['', Validators.required],
    releaseDate: [new Date().toISOString().slice(0, 10), [Validators.required, this.releaseDateValidator()]],
    description: ['', Validators.required],
    genreName: ['', Validators.required],
    classificationName: ['', Validators.required],
    platformNames: ['', Validators.required],
    businessModelName: ['', Validators.required]

  });
  constructor(private fb: FormBuilder, private gameService: GameService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idGame = +params['id'];
    });
   // this.idGame = this.route.snapshot.params['id'];
    this.isAddMode = !this.idGame;
    let gameDto!: GameDto;
    if (!this.isAddMode) {
      this.gameService.getGameById(this.idGame)
        .subscribe(game => {
          gameDto = {
            name: game.name,
            description: game.description,
            releaseDate: game.releaseDate,
            classificationName: game.classification.name,
            genreName: game.genre.name,
            editorName: game.editor.name,
            platformNames: game.platforms.map(platform =>platform.name),
            businessModelName: game.businessModel.name
          }
          this.addGameForm.patchValue(gameDto);
          console.log(this.addGameForm.value)

        });
    }
    // Gettings all the genres from database
    this.gameService.getAllGenres().subscribe({
      next: (data) => this.genres = data,
      error: (error => console.error(error))
    });
    // Gettings all the editors from database
    this.gameService.getAllEditors().subscribe({
      next: (data) => this.editors = data,
      error: (error => console.error(error))
    });
    // Gettings all the classifications from database
    this.gameService.getAllCassifications().subscribe({
      next: (data) => this.classifications = data,
      error: (error => console.error(error))
    });
    // Gettings all the platforms from database
    this.gameService.getAllPlatforms().subscribe({
      next: (data) => this.platforms = data,
      error: (error => console.error(error))
    });
    // Gettings all the businessModels from database
    this.gameService.getAllBusinessModels().subscribe({
      next: (data) => this.businessModels = data,
      error: (error => console.error(error))
    });

  }



  get name(): FormControl {
    return this.addGameForm.get('name') as FormControl;
  }
  get editorName(): FormControl {
    return this.addGameForm.get('editorName') as FormControl;
  }
  get releaseDate(): FormControl {
    return this.addGameForm.get('releaseDate') as FormControl;
  }
  get descript(): FormControl {
    return this.addGameForm.get('description') as FormControl;
  }
  get genreName(): FormControl {
    return this.addGameForm.get('genreName') as FormControl;
  }
  get classificationName(): FormControl {
    return this.addGameForm.get('classificationName') as FormControl;
  }
  get platformNames(): FormControl {
    return this.addGameForm.get('platformNames') as FormControl;
  }
  get businessModelName(): FormControl {
    return this.addGameForm.get('businessModelName') as FormControl;
  }
  onSubmit() {
    if (this.isAddMode) {
      this.addGame();
    } else {
      this.updateGame();
    }
  }

  constructGameDto(): GameDto {
    return {
      name: this.addGameForm.value.name,
      description: this.addGameForm.value.description,
      releaseDate: this.addGameForm.value.releaseDate,
      classificationName: this.addGameForm.value.classificationName,
      genreName: this.addGameForm.value.genreName,
      editorName: this.addGameForm.value.editorName,
      platformNames: this.addGameForm.value.platformNames,
      businessModelName: this.addGameForm.value.businessModelName
    }
  }
  addGame() {
    const gameDto = this.constructGameDto();
    this.gameService.addGame(gameDto).subscribe({
      next: (data: any) => {
        console.log(`réponse => ${data}`);
        console.log("type réponse => " + typeof data);
        //this.router.navigate(['../'], { relativeTo: this.route });
        this.success = `Le jeu ${gameDto.name} a bien été ajouté à la liste des jeux`;
      },
      error: (error: any) => console.error(error)
    });

  }

  updateGame() {
    const gameDto = this.constructGameDto();
    this.gameService.updateGame(gameDto, this.idGame).subscribe({next: (data: any) => {
      console.log(`réponse => ${data}`);
      console.log("type réponse => " + typeof data);
      this.success = `Le jeu ${gameDto.name} a bien été modifié`;
      //this.router.navigate(['../..'], { relativeTo: this.route });
    },
    error: (error: any) => {
      console.error(error);
      this.error = error
    } 
  });

  }
  /**
   * 
   * @param f FormGroup
   * @returns a array of invalid controls
   */
  findInvalidControls(f: FormGroup) {
    const invalid = [];
    const controls = f.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
      }
    }
    return invalid;
  }
  /**
   * 
   * @returns Custum Validator - releaseDate must be in the past
   */

  private releaseDateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let invalid = false;
      const date = control.value;
      console.log(`Date de sortie => ${date}`);
      const currentDate = new Date();
      console.log(`Date du jour => ${currentDate}`);
      invalid = (new Date(date).valueOf()) > (currentDate.valueOf());
      console.log(`invalid => ${invalid}`);
      console.log(this.addGameForm);

      return invalid ? { invalidReleaseDate: { value: date } } : null;

    };
  }
  handleSuccess() {
    this.success = 'null';
  }
  handleError() {
    this.error = 'null';
  }
}
