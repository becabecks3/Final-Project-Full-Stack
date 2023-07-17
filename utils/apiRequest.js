const axios = require('axios');
require('dotenv').config()



async function fetchEvents() {
    try {
      const url = `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=ES&size=100&apikey=${process.env.API_KEY}`;
      const response = await axios.get(url);
      const data = response.data;
      const events = data._embedded.events;
      const objInfo = events
                .map(event => {
                    return {
                        name: event._embedded.attractions[0].name,
                        dateTime: event.dates.start.localDate,
                        locaTime: event.dates.start.localTime,
                        // price: event.priceRanges[0].min,
                        venueName: event._embedded.venues[0].name,
                        venueLocation: event._embedded.venues[0].location,
                        venueAddress: event._embedded.venues[0].address.line1,
                        tickets: event.url,
                        distance: event.distance,
                        url: event.images[1].url,
                        genre: event.classifications[0].genre.name,
                        // spotify: event._embedded.attractions[0].externalLinks.spotify[0].url
                    }
                });
        
      console.log(objInfo);
    } catch (error) {
      console.log('Error:', error);
    }
  }

  fetchEvents();
  

  //MAIN



//HOME

