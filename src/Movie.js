import Utils from "./Utils";
class Movie {
  movieData;
  
  constructor(movieData) {
		this.movieData = movieData;
    this.utils = new Utils;
	}

  getCard() {
    const cardHtml = 
    `<div class="card" data-id="${this.getId()}" data-event-id="${this.getEventId()}">
      <div class="thumb"><img src="${this.getThumbUrl()}" alt="${this.getTitle()}" /></div>
      <h3 class="title">${this.getTitle()}</h3>
      <h4 class="subtitle">${this.getSubtitle()}</h4>
      <span class="date">Start date: ${this.getStartDate()}</span>
    </div>`;

    return cardHtml;
  }

  getEventId() {
    return this.movieData.event;
  }

  getId() {
    return this.movieData.id;
  }

  getStartDate() {
    const dateRaw = new Date(this.movieData.startDate);

    return this.utils.parseDate(dateRaw);
  }

  getShowtimes() {
    return this.movieData.showtimes;
  }

  getSubtitle() {
    return this.movieData.subtitle;
  }

  getThumbUrl() {
    return this.movieData.poster;
  }

  getTitle() {
    return this.movieData.title;
  }
}

export default Movie;