import React, { useEffect } from "react";
import axios from 'axios';

const TicketMaster = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const genreQueries = ['Pop', 'Rock', 'Hip-hop'];
        const apiKey = import.meta.env.VITE_API_KEY;
  
        const events = [];
  
        for (const genre of genreQueries) {
          const params = new URLSearchParams();
          params.set('countryCode', 'ES');
          params.set('size', '200');
          params.set('apikey', apiKey);
          params.set('classificationName', genre);
  
          const url = `https://app.ticketmaster.com/discovery/v2/events.json?${params.toString()}`;
  
          const response = await axios.get(url);
          const eventData = response.data._embedded.events.map(event => ({
            name: event.name,
            dateTime: event.dates.start.localDate,
            locaTime: event.dates.start.localTime,
            venueName: event._embedded.venues[0].name,
            venueLocation: event._embedded.venues[0].location,
            // venueAddress: event._embedded.venues[0].address.line1,
            tickets: event.url,
            // distance: event.distance,
            url: event.images[1].url,
            genre: event.classifications[0].genre.name,
          }));
          events.push(...eventData);
        }
  
        console.log(events);
  
      
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, []);

  return <div>TicketMaster Component</div>;
};

export default TicketMaster;
