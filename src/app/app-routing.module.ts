import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardGamerComponent } from './dashboard/dashboard-gamer/dashboard-gamer.component';
import { DashboardModeratorComponent } from './dashboard/dashboard-moderator/dashboard-moderator.component';
import { GameDetailComponent } from './game/game-detail/game-detail.component';
import { GameListComponent } from './game/game-list/game-list.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './connexion/sign-in/sign-in.component';

const routes: Routes = [
  { path:"", component:HomeComponent},
  { path:"signin", component: SignInComponent },
  { path:"dashboard-gamer", component: DashboardGamerComponent},
  { path:"dashboard-moderator", component: DashboardModeratorComponent},
  { path:"games", component: GameListComponent},
  { path:"game/:id", component: GameDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
