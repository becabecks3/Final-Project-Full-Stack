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
            <div key={uuidv4}>
              <p>{favorites.url_imagen}</p>
              <h2>{favorite.artista}</h2>
              <p>Fecha: {favorite.fecha}</p>
              <p>Sala: {favorite.sala}</p>
              <p>Precio: {favorite.precio}</p>
              <p>Género: {favorite.genero}</p>
              <p>Tickets: {favorite.url_evento}</p>
            </div>
          ))}
      </main>
    </body>
  );
};

export default Favorites;

