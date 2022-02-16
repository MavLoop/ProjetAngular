import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardGamerComponent } from './dashboard/dashboard-gamer/dashboard-gamer.component';
import { DashboardModeratorComponent } from './dashboard/dashboard-moderator/dashboard-moderator.component';
import { GameDetailComponent } from './game/game-detail/game-detail.component';
import { GameListComponent } from './game/game-list/game-list.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './connexion/sign-in/sign-in.component';
import { AddGameComponent } from './game/add-game/add-game.component';
import { SignUpComponent } from './connexion/sign-up/sign-up.component';
import { ManageGameListComponent } from './dashboard/dashboard-moderator/manage-game-list/manage-game-list.component';
import { UploadGameImageComponent } from './dashboard/dashboard-moderator/manage-game-list/upload-game-image/upload-game-image.component';

const routes: Routes = [
  { path:"", component:HomeComponent},
  { path:"signin", component: SignInComponent },
  { path:"signup", component: SignUpComponent },
  { path:"dashboard-gamer", component: DashboardGamerComponent},
  { path:"dashboard-moderator", component: DashboardModeratorComponent},
  { path:"games", component: GameListComponent},
  { path:"games/details/:id", component: GameDetailComponent },
  { path:"games/save", component: AddGameComponent },
  { path:"moderator/games", component: ManageGameListComponent },
  { path:"games/upload/:id", component: UploadGameImageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
