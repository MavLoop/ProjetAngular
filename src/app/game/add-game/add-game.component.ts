import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Alert } from 'src/app/common/model/alert.model';
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
  alert: Alert = {
    title: '',
    message: '',
    success: false
  }



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
            platformNames: game.platforms.map(platform => platform.name),
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
        this.alert.title = "Ajout d'un nouveau jeu reussi!";
        this.alert.message = `Le jeu ${gameDto.name} a bien été ajouté à la liste des jeux`;
        this.alert.success = true;
      },
      error: (error: any) => {
        this.alert.title = 'Echec!';
        this.alert.success = false;
        this.alert.message = error.error;
      }
    });

  }

  updateGame() {
    const gameDto = this.constructGameDto();
    this.gameService.updateGame(gameDto, this.idGame).subscribe({
      next: (data: any) => {
        this.alert.title = "Modification du jeu reussi!";
        this.alert.message = `Le jeu ${gameDto.name} a bien été modifié`;
        this.alert.success = true;
      },
      error: (error: any) => {
        this.alert.title = 'Echec!';
        this.alert.success = false;
        this.alert.message = error.error;
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
      const currentDate = new Date();
      invalid = (new Date(date).valueOf()) > (currentDate.valueOf());
      return invalid ? { invalidReleaseDate: { value: date } } : null;
    };
  }
  
  handleAlert() {
    this.alert = {
      title: '',
      message: '',
      success: false
    }
  }

  createNewGame() {
    this.addGameForm.patchValue({
      'name' : 'StarWars BattleFront II',
      'editorName' : 'Electronic Arts',
      'releaseDate' : '2017-11-17',
      'description' : "Star Wars Battlefront II est un jeu vidéo de tir à la première et troisième personne développé par DICE, Criterion Games et Motive Studios, et édité par Electronic Arts (EA). Le jeu sort le 17 novembre 2017 sur Windows, PlayStation 4 et Xbox One. Il fait suite au jeu vidéo Star Wars: Battlefront sorti en 2015. La campagne du jeu, présente dans ce second opus, débute après les événements du film Star Wars : Le Retour du Jedi, lorsque la base sidérale de l'Empire galactique, l'Étoile de la Mort, explose, mettant fin au règne de l'Empereur. Un soldat d'élite de l'Empire, Iden Versio, est alors décidée à venger la mort de l'Empereur.",
      'genreName' : 'FPS',
      'classificationName' : 'PEGI 12',
      'platformNames' : ['PlayStation 4', 'PlayStation 5', 'Xbox One'],
      'businessModelName' : 'Free to play',
    })
  }
}
