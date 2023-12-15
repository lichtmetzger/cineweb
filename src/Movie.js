class Movie {
  movieData;
  
  constructor(movieData) {
		this.movieData = movieData;
	}

  getCard() {
    //console.log(this.movieData);

    const cardHtml = 
    `<div class="card" data-id="${this.getId()}" data-event-id="${this.getEventId()}">
      <div class="thumb"><img src="${this.getThumbUrl()}" alt="${this.getTitle()}" /></div>
      <h3 class="title">${this.getTitle()}</h3>
      <h4 class="subtitle">${this.getSubtitle()}</h4>
      <span class="date">Presale starts: ${this.getStartDate()}</span>
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
    let dateParsed = "No date available (yet)";

    if(dateRaw) {
      const options = {
        timeZone: 'Europe/Berlin',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      };

      try {
        dateParsed = new Intl.DateTimeFormat('de-DE', options).format(dateRaw);
      } catch (error) {
        dateParsed = "No date available (yet)";
      } 
    }

    return dateParsed;
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