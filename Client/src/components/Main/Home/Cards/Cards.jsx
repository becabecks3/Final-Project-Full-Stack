import React, { useContext, useEffect, useState } from 'react';
import { EventContext } from '../../../../context/eventContext';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

const Cards = ({ filter }) => {
  const { eventList } = useContext(EventContext);

  const [isAddedToFavorites, setIsAddedToFavorites] = useState(false);

  const addToFavorites = async (event) => {
    const favoriteInfo = {
      id_usuario: 2,
      artista: event.name,
      fecha: event.dateTime,
      sala: event.venueName,
      genero: event.genre,
      ubicacion: null,
      precio: null,
      url_imagen: event.url,
      url_evento: event.tickets,
    };

    try {
      const response = await fetch('/api/favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([favoriteInfo]),
      });

      if (response.ok) {
        setIsAddedToFavorites(true);
        console.log('Guardado correctamente!');
      } else {
        console.log('No se ha guardado');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {eventList.map((event) => (
        <div key={uuidv4()}>
          <h3>{event.name}</h3>
          <img src={event.url} alt={event.name} />
          <p>Date: {event.dateTime}</p>
          <p>Time: {event.localTime}</p>
          <p>Venue: {event.venueName}</p>
          <p>Location: {event.address}</p>
          <p>Tickets: Price not available, please check down here:</p>
          <Link> {event.tickets}</Link>
          <p>Genre: {event.genre}</p>
          <button onClick={() => addToFavorites(event)} disabled={isAddedToFavorites}>
            {isAddedToFavorites ? 'Added' : 'Add to Favorites'}
          </button>
        </div>
      ))}
    </>
  );
};

export default Cards;






