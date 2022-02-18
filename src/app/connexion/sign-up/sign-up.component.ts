import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { GamerDto } from 'src/app/common/model/gamer-dto';
import { UserService } from 'src/app/common/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  message: string = 'null';


  constructor(private fb: FormBuilder, private userService: UserService) { }

  profileForm = this.fb.group({
    pseudo: ['', [Validators.required, Validators.pattern('^([A-Za-z0-9]+)*')]],
    birthdate: [new Date().toISOString().slice(0, 10), [Validators.required, this.releaseDateValidator()]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.min(6)]]

  });

  ngOnInit(): void {
  }

  get pseudoForm(): FormControl {
    return this.profileForm.get('pseudo') as FormControl;
  }
  get passwordForm(): FormControl {
    return this.profileForm.get('password') as FormControl;
  }
  get birthdate(): FormControl {
    return this.profileForm.get('birthdate') as FormControl;
  }
  get emailForm(): FormControl {
    return this.profileForm.get('email') as FormControl;
  }

  private createGamer = (data: any): any => {
    console.log(data);
    this.message = `Vous êtes officiellement inscrit`;
  }

  private ignoreError = (error: Error): void => {
    console.log(error);
    this.message = `Ce joueur existe déjà !`;
  };

  constructGamerDto(): GamerDto {
    return {
      pseudo: this.pseudoForm.value,
      password: this.passwordForm.value,
      birthDate: this.birthdate.value,
      email: this.emailForm.value
    }
  }

  formSending() {
    const gamerDto = this.constructGamerDto();
    console.log(gamerDto);
    this.userService.addGamer$(gamerDto).subscribe(({ 
      next: this.createGamer, 
      error: this.ignoreError 
    }))
  }

  private releaseDateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let invalid = false;
      const date = control.value;
      const currentDate = new Date();
      invalid = (new Date(date).valueOf()) > (currentDate.valueOf());
      return invalid ? { invalidReleaseDate: { value: date } } : null;
    };
  }

  handleSuccess() {
    this.message = 'null';
  }
}
