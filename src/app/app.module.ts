import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameDetailComponent } from './game/game-detail/game-detail.component';
import { GameComponent } from './game/game/game.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignInComponent } from './connexion/sign-in/sign-in.component';
import { GameListComponent } from './game/game-list/game-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { DashboardGamerComponent } from './dashboard/dashboard-gamer/dashboard-gamer.component';
import { DashboardModeratorComponent } from './dashboard/dashboard-moderator/dashboard-moderator.component';
import { SignUpComponent } from './connexion/sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    GameDetailComponent,
    GameComponent,
    NavbarComponent,
    SignInComponent,
    GameListComponent,
    ErrorComponent,
    HomeComponent,
    DashboardGamerComponent,
    DashboardModeratorComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
