class EventHandler {

    // Fire event to notify that the cinema is already set or has changed
    cinemaChosen() {
        const event = new CustomEvent('cinemaChosen');
        document.dispatchEvent(event);
    }

  }

export default EventHandler;