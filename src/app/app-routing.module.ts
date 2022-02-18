import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { NotAdminErrorComponent } from './error/not-admin-error/not-admin-error.component';
import { AdminGuard } from './common/guards/admin.guard';
import { GamerGuard } from './common/guards/gamer.guard';
import { UserGuardGuard } from './common/guards/user-guard.guard';


export const routes: Routes = [
  { path:"", component:HomeComponent},
  { path:"home", component:HomeComponent},
  { path:"signin", component: SignInComponent },
  { path:"signup", component: SignUpComponent },
  { path:"games", component: GameListComponent , canActivate: [UserGuardGuard]},
  { path:"games/details/:id", component: GameDetailComponent , canActivate: [UserGuardGuard]},
  { path:"moderator/games/save", component: AddGameComponent , canActivate: [AdminGuard] },
  { path:"moderator/games", component: ManageGameListComponent , canActivate: [AdminGuard] },
  { path:"game/:id/reviews", component: AddReviewsComponent , canActivate: [GamerGuard] },
  { path:"reviews/moderator/all",component:ReviewsListComponent , canActivate: [AdminGuard]},
  { path:"reviews/moderator/reviews/:id",component:ReviewsDetailComponent , canActivate: [AdminGuard]},
  { path:"reviews/gamer/list",component:ReviewsGamerListComponent , canActivate: [GamerGuard] },
  { path:"moderator/games/update/:id", component: AddGameComponent , canActivate: [AdminGuard]},
  { path:"moderator/games", component: ManageGameListComponent , canActivate: [AdminGuard]},
  { path:"games/upload/:id", component: UploadGameImageComponent , canActivate: [AdminGuard] },
  { path: "error", component:ErrorComponent},
  { path: 'error-not-connecting', component: NotConnectingErrorComponent},
  { path: 'error-not-moderator', component: NotAdminErrorComponent},
  { path: 'error-not-gamer', component: NotAdminErrorComponent},
  { path:'**', redirectTo:"home", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
