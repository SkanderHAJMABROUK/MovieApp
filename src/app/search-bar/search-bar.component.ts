import { Component, EventEmitter } from '@angular/core';
import { MovieService } from '../movie.service';
import { faMagnifyingGlassArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Output } from '@angular/core';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  searchTitle: string = '';
  



  onKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.searchMovieByTitle(this.searchTitle);
    }
  }

  onBackspace() {
    if (!this.searchTitle) {
      this.searchMovieByTitle('');
    }
  }
faMagnify=faMagnifyingGlassArrowRight
  @Output() selectMovieEvent=new EventEmitter<string>
  //je vais envoyer le titre qui est de type chaine
  searchMovieByTitle(searchString: string) {
    this.selectMovieEvent.emit(searchString)
   // on va emettre le titre qui est ici le parametre searchstring
  }
}