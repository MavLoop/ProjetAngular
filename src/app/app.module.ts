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
import { AddGameComponent } from './game/add-game/add-game.component';
import { GameDescriptionPipe } from './common/pipes/game-description.pipe';
import { MatCardModule } from '@angular/material/card';
import { ManageGameListComponent } from './dashboard/dashboard-moderator/manage-game-list/manage-game-list.component';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

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
    SignUpComponent,
    GameDescriptionPipe,
    AddGameComponent,
    ManageGameListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
