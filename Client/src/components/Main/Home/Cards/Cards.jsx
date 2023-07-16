import React, { useContext } from 'react';
import { EventContext } from '../../../../context/eventContext';
import { v4 as uuidv4 } from "uuid";

const Cards = ({filter}) => {
  const { eventList } = useContext(EventContext);


  const addToFavorites = (eventId) => {
    fetch('/api/favorites', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ eventId, userId }),
    })
      .then(response => {
        if (response.ok) {
          console.log('Guardado correctamente!')
        } else {
          console.log('No se ha guardado')
        }
      })
      .catch(error => {
        console.log(error)
      });
  };
  
  return (
    <>
      {eventList.map((event) => (
        <div key={uuidv4()}>
          <h3>{event.name}</h3>
          <p>Date: {event.dateTime}</p>
          <p>Time: {event.localTime}</p>
          <p>Venue: {event.venueName}</p>
          {/* <p>Location: {event.venueLocation}</p> */}
          <p>Tickets: {event.tickets}</p>
          <img src={event.url} alt={event.name} />
          <p>Genre: {event.genre}</p>
        </div>
      ))}
    </>
  );
};

export default Cards;





