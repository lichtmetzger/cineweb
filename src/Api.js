import LocalStorage from "./LocalStorage";

class Api {
  constructor() {
		//this.baseUrl = 'https://www.cinestar.de/api'
    this.baseUrl = 'https://cs.lichtmetzger.de/api'
	}

  async getCinemas() {
    try {
        const source = await fetch(
            `${this.baseUrl}/cinema/?appVersion=1.5.3`
        );
        const data = await source.json();

        return data;
    } catch (error) {
        return error;
    }
  }

  async getMovies() {
    const storage = new LocalStorage;
    const cinemaId = storage.getValue('cinemaId');

    try {
        const source = await fetch(
            `${this.baseUrl}/cinema/${cinemaId}/show/?appVersion=1.5.3`
        );
        const data = await source.json();

        return data;
    } catch (error) {
        return error;
    }
  }
}

export default Api;