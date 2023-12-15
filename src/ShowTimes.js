import Utils from "./Utils";
class ShowTimes {
  id;
  showTimeData;
  
  constructor(id, showTimeData) {
    this.id = id;
		this.showTimeData = showTimeData;
    this.eventDiv = document.querySelector(`div[data-id="${this.id}"]`);
    this.output = this.eventDiv.querySelector('#showtimes');
    this.utils = new Utils;
	}

  assemble() {
    // Do we have showtimes?
    if(this.showTimeData.length > 0) {
      this.addNextShowtime();
      this.addButton();
    }
  }

  addNextShowtime() {
    const dateRaw = this.showTimeData[0].datetime;
    this.output.innerHTML = 'Upcoming: ' + this.utils.parseDate(dateRaw);
  }

  addButton() {
    // Showtimes button
    const stButton = document.createElement('button');
    stButton.textContent = 'Display showtimes';

    stButton.addEventListener('click', () => {
      // Open up showtimes
      console.log('Opening showtimes for ' + this.id);
    });

    this.output.appendChild(stButton);
  }

}

export default ShowTimes;