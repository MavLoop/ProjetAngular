import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { Gamer } from 'src/app/common/model/gamer';
import { LoginDTO } from 'src/app/common/model/login-dto';
import { AuthenticationService } from 'src/app/common/services/authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private fb: FormBuilder) { }

  login: LoginDTO = new LoginDTO();
  profileForm = this.fb.group({
    pseudo: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  gamer?: Gamer;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  ngOnInit(): void {
  }

  get pseudoForm(): FormControl {
    return this.profileForm.get('pseudo') as FormControl;
  }
  get passwordForm(): FormControl {
    return this.profileForm.get('password') as FormControl;
  }

  formSending() {
    this.login.pseudo = this.pseudoForm.value;
    this.login.password = this.passwordForm.value;

    this.authenticationService.signin$(this.login.pseudo, this.login.password)
      .subscribe(
        data => {
          console.log(data.id);
          // this.tokenStorage.saveToken(data.token);
          // this.tokenStorage.saveUser(data);
          this.gamer = data;
          console.log(this.gamer);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
        },
        (err: { error: { message: string; }; }) => {
          this.errorMessage = "êtes-vous inscrit ?";
          this.isLoginFailed = true;
        }
      );
  }
}
