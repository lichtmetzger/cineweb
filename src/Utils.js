class Utils {

  parseDate(input) {
    let dateParsed = "No date available (yet)";

    if(input) {
      const dateRaw = new Date(input);

      const options = {
        timeZone: 'Europe/Berlin',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      };

      try {
        dateParsed = new Intl.DateTimeFormat('de-DE', options).format(dateRaw);
      } catch (error) {
        dateParsed = "No date available (yet)";
      } 
    }

    return dateParsed;
  }
}

export default Utils;