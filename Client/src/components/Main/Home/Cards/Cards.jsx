import React, { useContext, useEffect, useState } from 'react';
import { EventContext } from '../../../../context/eventContext';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

const Cards = ({ filter }) => {
  const { eventList } = useContext(EventContext);

  const [isAddedToFavorites, setIsAddedToFavorites] = useState(false);
  const [sortType, setSortType] = useState('');

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

  
  const handleSortChange = (event) => {
    setSortType(event.target.value);
  };

  const sortedEventList = eventList.sort((a, b) => {
    if (sortType === 'asc') {
      return a.name.localeCompare(b.name);
    } else if (sortType === 'desc') {
      return b.name.localeCompare(a.name);
    } else {
      return 0;
    }
  });

  return (
    
      <main>
        <section className='sort-container'>
          <label htmlFor="sort-type">Ordenar</label>
          <select id="sort-type" value={sortType} onChange={handleSortChange}>
            <option value="">Ninguno</option>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
        </section>
        {sortedEventList.map((event) => (
          <div key={uuidv4()} className='event-container'>
            <h3>{event.name}</h3>
            <img className='event-img' src={event.url} alt={event.name} />
            <p><span className='event-title'>Fecha</span> {event.dateTime}</p>
            <p><span className='event-title'>Hora</span> {event.localTime}</p>
            <p><span className='event-title'>Sala</span> {event.venueName}</p>
            <p><span className='event-title'>Dirección</span> {event.address}</p>
            <p><span className='event-title'>Género</span> {event.genre}</p>
            <p><span className='event-title'>Precio</span><Link to={event.tickets}>Check here</Link></p>
            
            <button className='event-button' onClick={() => addToFavorites(event)} disabled={isAddedToFavorites}>
              {isAddedToFavorites ? 'Añadido' : 'Favoritos'}
            </button>
          </div>
        ))}
      </main>
    
  );
};

export default Cards;






