import Api from "./Api";
import Movie from "./Movie";

class Body {
  constructor() {
		this.output = document.getElementById('body');

    document.addEventListener('cinemaChosen', (event) => {
      this.addMovieCards();
    });
	}

  addMovieCards() {
    // Clear results
    this.output.innerHTML = '';

    // Fetch movies
    const api = new Api;
    
    api.getMovies().then((movies) => {
      movies.forEach(movieData => {
         const movie = new Movie(movieData);
         this.output.innerHTML += movie.getCard();
      });
    });
  }
}

export default Body;