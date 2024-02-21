import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './movie';
import { pipe } from 'rxjs';
import { map , filter , find} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MovieService {


// Injection dans le service
  constructor(private _httpClient:HttpClient) { }

  wishList:Movie[]=[] 

  getMovieList() : Observable<Movie[]>
  {
    return this._httpClient.get<Movie[]>('../assets/movies.json')
  }

  // map affiche un tableau avec ube règle

  getMovieByTitle(titre:string) : Observable<Movie[]>
  {
      return this.getMovieList().pipe
      (map(movies=>movies.filter(movie=>movie.title.toLowerCase().includes(titre.toLowerCase()))))
  }

  movie!:any

  getMovieByID(id:number) : Observable<Movie|undefined>
  {
      return this.getMovieList().pipe
      (map(movies=>movies.find(movie=>movie.id===id)))
  }

  // === : égale en type et en valeur


}

