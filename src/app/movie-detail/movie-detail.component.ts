import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit{

  faHeart = faHeart; // Importez l'icône de cœur


  constructor (private _activatedRoute:ActivatedRoute,
                private _movie_service:MovieService)
  {

  }

    // snapchot dans ce cas capture la route active

    selectedMovie!:any
  ngOnInit(): void {
    const id=Number(this._activatedRoute.snapshot.paramMap.get('movieId'))
    this.selectedMovie=this._movie_service.getMovieByID(id)
    .subscribe(response=>this.selectedMovie=response)
  }

  movie!:any

  addToWishList(movie:Movie){
    this._movie_service.wishList.push(movie)
    console.table(this._movie_service.wishList)
  }


   
}
