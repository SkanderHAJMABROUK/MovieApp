import { Component,OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Observable } from 'rxjs';
import { Movie} from '../movie'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movieList!:Movie[]

  constructor(private _movieService : MovieService)
  {

  }

  ngOnInit(): void {
    this._movieService.getMovieList().subscribe
    (response=>this.movieList=response)
  }

  selectedMovieList !: Movie[]

  updateMovieList(title:string){
     this._movieService.getMovieByTitle(title)
     .subscribe(response=>this.selectedMovieList=response)
  }

}
