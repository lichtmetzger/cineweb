class Footer {
  constructor() {
		this.output = document.getElementById('footer');
    this.addCredits();
	}

  addCredits() {
    // Wrapper for select and button
      const credits = document.createElement('div');
      credits.setAttribute('class', 'credits');

      credits.innerHTML = 'Built on a rainy evening by <a href="https://github.com/lichtmetzger/cineweb/" target="_blank">@lichtmetzger</a>.';
      credits.innerHTML += ' This is not an official Cinestar app.';
    
      this.output.appendChild(credits);
  }
}

export default Footer;