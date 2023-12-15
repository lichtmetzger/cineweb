import Api from "./Api";
import LocalStorage from "./LocalStorage";

class Header {
  constructor() {
    this.storage = new LocalStorage;
		this.output = document.getElementById('header');
    this.addCinemaPicker;
	}

  addCinemaPicker() {
    // Fetch cinemas
    const api = new Api;
    api.getCinemas().then((cinemas) => {

      // Dropdown selection
      const selectElement = document.createElement('select');

      cinemas.forEach(cinema => {
        const optionElement = document.createElement('option');
        optionElement.value = cinema.cinemaNumber;
        // Shorten the name
        optionElement.textContent = cinema.name;
        selectElement.appendChild(optionElement);        
      });

      // Auto-set cinema when previously set
      const storedCinemaNumber = this.storage.getValue('cinemaNumber');
      if (storedCinemaNumber) {
        selectElement.value = storedCinemaNumber;
      }

      // Go button
      const goButton = document.createElement('button');
      goButton.textContent = 'Select this cinema';
      goButton.addEventListener('click', () => {
        // Save the selected cinema into localStorage
        const cinemaNumber = selectElement.value;
        const selectedOption = [...selectElement.options].find(option => option.value === cinemaNumber);
        const cinemaName = selectedOption.textContent;

        this.storage.addValue('cinemaNumber', cinemaNumber)
        this.storage.addValue('cinemaName', cinemaName)
      });

      this.output.appendChild(selectElement);
      this.output.appendChild(goButton);
    });
  }
}

export default Header;