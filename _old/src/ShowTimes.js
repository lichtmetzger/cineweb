import Utils from "./Utils";
import LocalStorage from "./LocalStorage";

class ShowTimes {
  id;
  showTimeData;
  
  constructor(id, showTimeData) {
    this.storage = new LocalStorage;
    this.cinemaNumber = this.storage.getValue('cinemaNumber');
    this.id = id;
		this.showTimeData = showTimeData;
    this.eventDiv = document.querySelector(`div[data-id="${this.id}"]`);
    this.utils = new Utils;
	}

  assemble() {
    // Do we have showtimes?
    if(this.showTimeData.length > 0) {
      this.addNextShowtimeDate();
      this.addButton();
    }
  }

  addNextShowtimeDate() {
    const dateRaw = this.showTimeData[0].datetime;
    this.eventDiv.innerHTML += 'Upcoming: ' + this.utils.parseDate(dateRaw);
  }

  addButton() {
    // Flex space
    const flexSpacer = document.createElement('div');
    flexSpacer.setAttribute('class', 'flex-spacer');

    // Showtimes button
    const stButton = document.createElement('button');
    stButton.textContent = 'Display showtimes';

    stButton.addEventListener('click', () => {
      // Open up showtimes
      this.toggleShowtimesBox();
    });

    this.eventDiv.appendChild(flexSpacer);
    this.eventDiv.appendChild(stButton);
  }

  generateShowtimes() {
    let output = '<ul>';

    this.showTimeData.forEach(showtime => {
      const bookingUrl = `https://webticketing2.cinestar.de/?#/init/${this.cinemaNumber}/${showtime.systemId}"`
      output += `<li><a href="${bookingUrl}" target="_blank">${this.utils.parseDate(showtime.datetime)}</a></li>`;
    });

    output += '</ul>';

    return output;
  }

  toggleShowtimesBox() {
    let showTimesBox = this.eventDiv.querySelector('.showtimes-box');

    if(showTimesBox) {
      showTimesBox.remove()
    } else {
      showTimesBox = document.createElement('div');
      showTimesBox.setAttribute('class', 'showtimes-box');
      showTimesBox.innerHTML = this.generateShowtimes();

      this.eventDiv.append(showTimesBox);
    }
  }

}

export default ShowTimes;