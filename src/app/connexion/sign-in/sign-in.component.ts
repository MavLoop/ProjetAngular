import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Gamer } from 'src/app/common/model/gamer';
import { LoginDTO } from 'src/app/common/model/login-dto';
import { AuthenticationService } from 'src/app/common/services/authentication.service';
import { TokenStorageService } from 'src/app/common/services/token-storage.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
    private fb: FormBuilder,
    private router: Router,
    private tokenStorageService: TokenStorageService) { }

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
    this.tokenStorageService.estConnecte.subscribe(isConnect => {
      // this.isLoggedIn = !!this.tokenStorage.getToken();
      this.isLoggedIn = isConnect;
      this.gamer = this.tokenStorageService.getUser();
      if (!isConnect) {
        this.refreshform();
      }
    });
  }

  get pseudoForm(): FormControl {
    return this.profileForm.get('pseudo') as FormControl;
  }
  get passwordForm(): FormControl {
    return this.profileForm.get('password') as FormControl;
  }

  private ignoreError = (error: Error): void => {
    this.errorMessage = "êtes-vous inscrit ?";
    this.isLoginFailed = true;
  };
  
  private loadGamer = (data: Gamer): void => {
    this.gamer = data;
    // this.tokenStorageService.saveToken(data.token);
    this.tokenStorageService.saveUser(data);
    console.log(this.gamer);
    this.isLoginFailed = false;
    this.isLoggedIn = true;
  }

  formSending() {
    this.login.pseudo = this.pseudoForm.value;
    this.login.password = this.passwordForm.value;

    this.authenticationService.signin$(this.login.pseudo, this.login.password)
      .subscribe(({ next: this.loadGamer, error: this.ignoreError }))
  }

  onLogout(): void {
    this.tokenStorageService.signOut();
    this.isLoggedIn = false;
    this.refreshform();
  }

  refreshform() {
    const pseudo = '';
    const password = '';
    this.profileForm.get('pseudo')?.setValue(pseudo);
    this.profileForm.get('password')?.setValue(password);
  }

}
