import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadBarComponent } from './head-bar/head-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { HttpClientModule } from '@angular/common/http'
import { MovieService } from './movie.service';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HeadBarComponent,
    SearchBarComponent,
    MovieListComponent,
    MovieDetailComponent,
    WishListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'', component:MovieListComponent},
      {path:'movie/:movieId', component:MovieDetailComponent},
      {path:'wish', component:WishListComponent},
      {path:'wish/:movieId',component:MovieDetailComponent}
    ])

  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
