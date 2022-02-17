import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { GamerDto } from 'src/app/common/model/gamer-dto';
import { UserService } from 'src/app/common/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  gamerDto: GamerDto = new GamerDto();

  constructor(private fb:FormBuilder, private userService : UserService) { }

  profileForm = this.fb.group({
    pseudo: ['', [Validators.required, Validators.pattern('^([A-Za-z0-9]+)*')]],
    birthdate:['', [Validators.required]],
    email:['',  [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(6)]]

  });

  ngOnInit(): void {
  }

  get pseudoForm(): FormControl {
    return this.profileForm.get('pseudo') as FormControl;
  }
  get passwordForm(): FormControl {
    return this.profileForm.get('password') as FormControl;
  }
  get birthDateForm(): FormControl {
    return this.profileForm.get('birthdate') as FormControl;
  }
  get emailForm(): FormControl {
    return this.profileForm.get('email') as FormControl;
  }

  private createGamer = (data: any): void => {
    this.gamerDto = data;
    console.log(this.gamerDto);
  }

  private ignoreError = (error: Error): void => {
    console.log()
  };
  
  formSending() {
    this.gamerDto.pseudo = this.pseudoForm.value;
    this.gamerDto.password = this.passwordForm.value;
    this.gamerDto.birthdate = this.birthDateForm.value;
    this.gamerDto.email = this.emailForm.value;

    this.userService.addGamer$(this.gamerDto)
      .subscribe(({ next: this.createGamer, error: this.ignoreError }))
  }
}
