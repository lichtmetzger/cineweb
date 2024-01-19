import Utils from "./Utils";
class Movie {
  movieData;
  
  constructor(movieData) {
		this.movieData = movieData;
    this.utils = new Utils;
	}

  getCard() {
    const id = this.getId();
    const eventId = this.getEventId();
    
    let card = document.createElement('div');
    card.setAttribute('class', 'card');
    card.setAttribute('data-id', id);
    card.setAttribute('data-event-id', eventId);

    card.innerHTML = 
    `
    <div class="thumb"><img src="${this.getThumbUrl()}" alt="${this.getTitle()}" /></div>
    <h3 class="title">${this.getTitle()}</h3>
    <h4 class="subtitle">${this.getSubtitle()}</h4>
    <span class="date">Start date: ${this.getStartDate()}</span>
    `;

    return card;
  }

  getEventId() {
    return this.movieData.event;
  }

  getId() {
    return this.movieData.id;
  }

  getStartDate() {
    const dateRaw = this.movieData.startDate;

    return this.utils.parseDate(dateRaw, { hideTime: true });
  }

  getShowtimeData() {
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