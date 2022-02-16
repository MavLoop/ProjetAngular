import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { BusinessModel } from 'src/app/common/model/business-model.model';
import { Classification } from 'src/app/common/model/classification.model';
import { Editor } from 'src/app/common/model/editor.model';
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


  addGameForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    editorName: ['', Validators.required],
    releaseDate: ['', this.releaseDateValidator()],
    description: ['', Validators.required],
    genreName: ['', Validators.required],
    classificationName: ['', Validators.required],
    platformNames: ['', Validators.required],
    businessModelName: ['', Validators.required]

  });
  constructor(private fb: FormBuilder, private gameService: GameService) { }

  ngOnInit(): void {
    this.genres = [{ id: 1, name: "genre 1" }, { id: 2, name: "genre 2" }];
    this.editors = [{ id: 1, name: "editor 1" }, { id: 2, name: "editor 2" }];
    this.classifications = [{ id: 1, name: "cassification 1" }, { id: 2, name: "classification 2" }];
    this.platforms = [{ id: 1, name: "platform 1" }, { id: 2, name: "platform 2" }];
    this.businessModels = [{ id: 1, name: "businessModel 1" }, { id: 2, name: "businessModel 2" }];
    // Gettings all the genres from database
    /*this.gameService.getAllGenres().subscribe({
      next: (data) => this.genres = data,
      error: (error => console.error(error))
    });
    // Gettings all the editors from database
    /*this.gameService.getAllEditors().subscribe({
      next: (data) => this.editors = data,
      error: (error => console.error(error))
    });
    // Gettings all the classifications from database
    /*this.gameService.getAllCassifications().subscribe({
      next: (data) => this.classifications = data,
      error: (error => console.error(error))
    });
    // Gettings all the platforms from database
    /*this.gameService.getAllPlatforms().subscribe({
      next: (data) => this.platforms = data,
      error: (error => console.error(error))
    });
    // Gettings all the businessModels from database
    this.gameService.getAllBusinessModels().subscribe({
      next: (data) => this.businessModels = data,
      error: (error => console.error(error))
    });*/

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

  addGame() {
    console.log(this.addGameForm);
    console.log(this.findInvalidControls(this.addGameForm))
  }

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
    // return (control: AbstractControl): { [key: string]: any } | null => {
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
}
