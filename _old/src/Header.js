import Api from "./Api";
import LocalStorage from "./LocalStorage";
import EventHandler from "./EventHandler";

class Header {
  constructor() {
    this.storage = new LocalStorage;
    this.eventHandler = new EventHandler;
		this.output = document.getElementById('header');
    this.addCinemaPicker();
	}

  addCinemaPicker() {
    // Fetch cinemas
    const api = new Api;
    api.getCinemas().then((cinemas) => {

      // Dropdown selection
      const selectElement = document.createElement('select');

      cinemas.forEach(cinema => {
        const optionElement = document.createElement('option');
        optionElement.value = cinema.id;
        optionElement.setAttribute('data-cinema-number', cinema.cinemaNumber);
        // Shorten the name
        optionElement.textContent = cinema.name;
        selectElement.appendChild(optionElement);        
      });

      // Auto-set cinema when previously set
      const storedCinemaId = this.storage.getValue('cinemaId');
      const storedCinemaNumber = this.storage.getValue('cinemaNumber');
      if (storedCinemaId && storedCinemaNumber) {
        selectElement.value = storedCinemaId;
        // Fire event to notify that the cinema is available
        this.eventHandler.cinemaChosen();        
      }

      // Go button
      const goButton = document.createElement('button');
      goButton.textContent = 'Select this cinema';
      goButton.addEventListener('click', () => {
        // Save the selected cinema into localStorage
        const cinemaId = selectElement.value;
        const selectedOption = [...selectElement.options].find(option => option.value === cinemaId);
        const cinemaName = selectedOption.textContent;
        const cinemaNumber = selectedOption.getAttribute('data-cinema-number');

        this.storage.addValue('cinemaId', cinemaId);
        this.storage.addValue('cinemaName', cinemaName);
        this.storage.addValue('cinemaNumber', cinemaNumber);

        // Fire event to notify that the cinema has changed
        this.eventHandler.cinemaChosen(); 
      });

      // Wrapper for select and button
      const inputWrapper = document.createElement('div');
      inputWrapper.setAttribute('class', 'cinema-selector');

      inputWrapper.appendChild(selectElement);
      inputWrapper.appendChild(goButton);

      this.output.appendChild(inputWrapper);
    });
  }
}

export default Header;