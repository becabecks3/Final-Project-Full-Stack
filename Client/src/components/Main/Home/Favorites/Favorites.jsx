import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/favorites`);

        if (response.ok) {
          const data = await response.json();
          setFavorites(data);
        } else {
          console.error('Error al obtener los favoritos');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); 

  return (
    <body>
      <main>
          <h1>Favorites</h1>
          {favorites.map((favorite) => (
            <div key={uuidv4} className='event-container'>
               <h3>{favorite.name}</h3>
            <img className='event-img' src={favorite.url} alt={favorite.name} />
            <p><span className='event-title'>Fecha</span> {favorite.dateTime}</p>
            <p><span className='event-title'>Hora</span> {favorite.localTime}</p>
            <p><span className='event-title'>Sala</span> {favorite.venueName}</p>
            <p><span className='event-title'>Dirección</span> {favorite.address}</p>
            <p><span className='event-title'>Género</span> {favorite.genre}</p>
            <p><span className='event-title'>Precio</span><Link to={favorite.tickets}>Check here</Link></p>
            </div>
          ))}
      </main>
    </body>
  );
};

export default Favorites;

