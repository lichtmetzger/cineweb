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
}

export default Api;