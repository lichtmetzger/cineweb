class Utils {

  parseDate(rawDateString) {
    let dateParsed = "No date available (yet)";

    if(rawDateString) {
      const options = {
        timeZone: 'Europe/Berlin',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      };

      try {
        dateParsed = new Intl.DateTimeFormat('de-DE', options).format(rawDateString);
      } catch (error) {
        dateParsed = "No date available (yet)";
      } 
    }

    return dateParsed;
  }
}

export default Utils;