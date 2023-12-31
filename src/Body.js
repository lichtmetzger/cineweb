import Api from "./Api";
import Movie from "./Movie";
import ShowTimes from "./ShowTimes";
import LocalStorage from "./LocalStorage";

class Body {
  constructor() {
		this.output = document.getElementById('body');
    this.storage = new LocalStorage();

    this.handleFirstRun();

    document.addEventListener('cinemaChosen', (event) => {
      this.addMovieCards();
    });
	}

  handleFirstRun() {
    // Check if we have a cinema set, show a message if not.
    const cinemaId = this.storage.getValue('cinemaId');

    if(!cinemaId) {
      let note = document.createElement('div');
      note.setAttribute('class', 'note');
      note.innerHTML = 'Welcome to CINEWEB, an alternative frontend for booking Cinestar tickets.<br><br>'
      note.innerHTML += '<strong>Please pick a cinema at the top to see all current movies and events.</strong>';

      this.output.append(note);
    }
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