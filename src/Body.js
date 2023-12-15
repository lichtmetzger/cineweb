import Api from "./Api";
import Movie from "./Movie";
import ShowTimes from "./ShowTimes";

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

      // Sort movies by title
      movies.sort((a, b) => {
        const nameA = a.title.toUpperCase(); // ignore case
        const nameB = b.title.toUpperCase(); // ignore case
    
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        
        return 0; // names must be equal
      });

      movies.forEach(movieData => {
         const movie = new Movie(movieData);
         const cardElement = movie.getCard();
         this.output.append(cardElement);

         const st = new ShowTimes(movie.getId(), movie.getShowtimeData());
         st.assemble();
      });
    });
  }
}

export default Body;