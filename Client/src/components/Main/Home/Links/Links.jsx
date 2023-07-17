import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { EventContext } from "../../../../context/eventContext";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const Links = () => {
  const { setEventList } = useContext(EventContext);

  const fetchDataFromAPI = async (params) => {
    try {
      const url = `https://app.ticketmaster.com/discovery/v2/events.json?${params}`;

      const response = await fetch(url);
      const data = await response.json();

      let eventData = data._embedded.events.map((event) => ({
        name: event.name,
        dateTime: event.dates.start.localDate,
        localTime: event.dates.start.localTime,
        venueName: event._embedded.venues[0].name,
        venueLocation: event._embedded.venues[0].location,
        address: event._embedded.venues[0].address.line1,
        tickets: event.url,
        url: event.images[1].url,
        genre: event.classifications[0].genre.name,
      }));
      console.log(eventData);
      setEventList(eventData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFetchData = async (filter, geoPoint = null) => {
    const params = new URLSearchParams();
    params.set("countryCode", "ES");
    params.set("size", "200");
    params.set("apikey", import.meta.env.VITE_API_KEY);

    if (filter === "Festivales") {
      params.set("classificationName", "Festival");
    } else if (filter === "Madrid") {
      params.set("city", "Madrid");
    } else if (filter === "Barcelona") {
      params.set("city", "Barcelona");
    } else if (filter === "Bilbao") {
      params.set("city", "Bilbao");
    } else if (filter === "Cerca de mi") {
      params.set("city", "Madrid");
    } else if (filter === "Rock") {
      params.set("genre", "Rock");
    } else if (filter === "Pop") {
      params.set("genre", "Pop");
    } else if (filter === "Electronica") {
      params.set("genre", "Electronica");
    }
    fetchDataFromAPI(params);
  };

  const itemData = [
    {
      img: 'https://www.renfe.com/content/dam/renfe/es/Viajeros/Secciones/Experiencias/festivales/banner-festivales.jpg',
      title: 'Festivales',
      rows: 1,
      cols: 4,
      link: "/cards/Festivales"
    },
    {
      img: 'https://media.timeout.com/images/101206597/image.jpg',
      title: 'Madrid',
      rows: 2,
      cols: 2,
      link: "/cards/Madrid"
    },
    {
      img: 'https://media.cntraveller.com/photos/611bed73a954a4e571f6f36c/16:9/w_2580,c_limit/sofar-sounds-dec18-jane-jimenez-for-sofar-sounds.jpg',
      title: 'Barcelona',
      cols: 2,
      link: "/cards/Barcelona"
    },
    {
      img: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/springfield/Concerts_Live_Music_d30b0459-d42e-424b-8ccf-31419a06694d.jpg',
      title: 'Bilbao',
      cols: 2,
      rows: 3,
      link: "/cards/Bilbao"
    },
    {
      img: 'https://blogs.iadb.org/ciudades-sostenibles/wp-content/uploads/sites/17/2016/04/music-cities.jpg',
      title: 'Cerca de mi',
      cols: 2,
      rows: 1,
      link: "/map"
    },
    {
      img: 'https://www.elcorteingles.es/entradas/blog/wp-content/uploads/2023/01/pop.jpg',
      title: 'Pop',
      cols: 2,
      rows: 2,
      link: "/cards/Pop"
    },
    {
      img: 'https://www.atrapalo.com/houdinis/wp-content/uploads/2019/03/music1.png',
      title: 'Rock',
      cols: 2,
      rows: 3,
      link: "/cards/Rock"
    },
    {
      img: 'https://www.eltiempo.com/uploads/2022/03/05/62238187ed16e.jpeg',
      title: 'Electronica',
      cols: 2,
      rows: 2,
      link: "/cards/Electronica"
    },
  ];

  return (
    <>
      <section>
        <ImageList
          sx={{ width: '100%', height: 896 }}
          variant="quilted"
          cols={4}
          rowHeight={121}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
              <img src={item.img} alt={item.title} loading="lazy" />
              <Link
                to={item.link}
                onClick={() => handleFetchData(item.title)}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "white",
                  textAlign: "center",
                }}
              >
                {item.title}
              </Link>
            </ImageListItem>
          ))}
        </ImageList>
      </section>
    </>
  );
};

export default Links;











