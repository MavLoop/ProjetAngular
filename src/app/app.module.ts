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
import { MatDialogModule } from '@angular/material/dialog'
import { RouterModule } from '@angular/router';
import { routes }   from './app-routing.module';
import { AddReviewsComponent } from './reviews/add-reviews/add-reviews.component';
import { NotConnectingErrorComponent } from './error/not-connecting-error/not-connecting-error.component';
import { ReviewsListComponent } from './reviews/reviews-list/reviews-list.component';
import { UploadGameImageComponent } from './dashboard/dashboard-moderator/manage-game-list/upload-game-image/upload-game-image.component';
import { ReviewsDetailComponent } from './reviews/reviews-detail/reviews-detail.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SuccessComponent } from './success/success.component';
import { MatSortModule } from '@angular/material/sort';
import { GameReviewComponent } from './game/game-detail/game-review/game-review.component';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';
import { ReviewsGamerListComponent } from './reviews/reviews-gamer-list/reviews-gamer-list.component';
import { SuccessSignUpComponent } from './success-sign-up/success-sign-up.component';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeFr, 'fr-FR', localeFrExtra);

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
    DashboardModeratorComponent,
    SignUpComponent,
    GameDescriptionPipe,
    AddGameComponent,
    ManageGameListComponent,
    AddReviewsComponent,
    UploadGameImageComponent,
    ReviewsListComponent,
    NotConnectingErrorComponent,
    SuccessComponent,
    ReviewsDetailComponent,
    GameReviewComponent,
    ReviewsGamerListComponent,
    SuccessSignUpComponent
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
    MatTableModule,
    MatDialogModule,
    MatSortModule,
    MatFormFieldModule,
    RouterModule.forRoot(routes ,{ useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
