import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {
  editors!: string[];
  genres!: string[];
  classifications!: string[];
  platforms!: string[];
  businessModels!: string[];


  addGameForm = this.fb.group({
    name: ['', Validators.required],
    editorName: ['', Validators.required],
    releaseDate: [''],
    description: ['', Validators.required],
    genreName: ['', Validators.required],
    classificationName: ['', Validators.required],
    platformNames: ['', Validators.required],
    businessModelName: ['', Validators.required]

  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
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
  get description(): FormControl {
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
    return this.addGameForm.get('businessModel') as FormControl;
  }

  addGame() {
    console.log(this.addGameForm);
  }
}
