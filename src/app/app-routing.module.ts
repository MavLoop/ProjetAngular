import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModeratorComponent } from './dashboard/dashboard-moderator/dashboard-moderator.component';
import { GameDetailComponent } from './game/game-detail/game-detail.component';
import { GameListComponent } from './game/game-list/game-list.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './connexion/sign-in/sign-in.component';
import { AddGameComponent } from './game/add-game/add-game.component';
import { SignUpComponent } from './connexion/sign-up/sign-up.component';
import { ManageGameListComponent } from './dashboard/dashboard-moderator/manage-game-list/manage-game-list.component';
import { ErrorComponent } from './error/error.component';
import { UploadGameImageComponent } from './dashboard/dashboard-moderator/manage-game-list/upload-game-image/upload-game-image.component';
import { AddReviewsComponent } from './reviews/add-reviews/add-reviews.component';
import { ReviewsListComponent } from './reviews/reviews-list/reviews-list.component';
import { NotConnectingErrorComponent } from './error/not-connecting-error/not-connecting-error.component';
import { ReviewsDetailComponent } from './reviews/reviews-detail/reviews-detail.component';
import { ReviewsGamerListComponent } from './reviews/reviews-gamer-list/reviews-gamer-list.component';

export const routes: Routes = [
  { path:"", component:HomeComponent},
  { path:"home", component:HomeComponent},
  { path:"signin", component: SignInComponent },
  { path:"signup", component: SignUpComponent },
  { path:"dashboard-moderator", component: DashboardModeratorComponent},
  { path:"games", component: GameListComponent},
  { path:"games/details/:id", component: GameDetailComponent },
  { path:"moderator/games/save", component: AddGameComponent },
  { path:"moderator/games", component: ManageGameListComponent },
  { path:"game/:id/reviews", component: AddReviewsComponent},
  { path:"reviews/moderator/all",component:ReviewsListComponent},
  { path:"reviews/moderator/reviews/:id",component:ReviewsDetailComponent},
  { path:"reviews/gamer/list",component:ReviewsGamerListComponent},
  { path:"moderator/games/update/:id", component: AddGameComponent },
  { path:"moderator/games", component: ManageGameListComponent },
  { path:"games/upload/:id", component: UploadGameImageComponent },
  { path: "error", component:ErrorComponent},
  { path: 'error-not-connecting', component: NotConnectingErrorComponent},
  { path:'**', redirectTo:"home", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
