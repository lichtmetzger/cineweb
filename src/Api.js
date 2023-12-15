import LocalStorage from "./LocalStorage";

class Api {
  async getCinemas() {
    try {
        const source = await fetch(
            `https://www.cinestar.de/api/cinema/?appVersion=1.5.3`
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
            `https://www.cinestar.de/api/cinema/${cinemaId}/show/?appVersion=1.5.3`
        );
        const data = await source.json();

        return data;
    } catch (error) {
        return error;
    }
  }
}

export default Api;