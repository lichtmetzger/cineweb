class Utils {

  parseDate(input, options = {hideTime: false}) {
    let dateParsed = "No date available (yet)";

    if(input) {
      const dateRaw = new Date(input);

      let config = {
        timeZone: 'UTC',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      };

      if(!options.hideTime) {
        config.hour = 'numeric';
        config.minute = 'numeric';
      }

      try {
        dateParsed = new Intl.DateTimeFormat('de-DE', config).format(dateRaw);
      } catch (error) {
        dateParsed = "No date available (yet)";
      } 
    }

    return dateParsed;
  }
}

export default Utils;