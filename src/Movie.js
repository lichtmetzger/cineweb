class Movie {
  movieData;
  
  constructor(movieData) {
		this.movieData = movieData;
	}

  getCard() {
    console.log(this.movieData);
    const cardHtml = `<div class="card">${this.getTitle()}</div>`;
    return cardHtml;
  }

  getTitle() {
    return this.movieData.title;
  }
}

export default Movie;