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
      img: 'https://p1.pxfuel.com/preview/637/334/470/band-music-live-music-concert-crowd-crowd-surfing.jpg',
      title: 'Festivales',
      rows: 2,
      cols: 4,
      link: "/cards/Festivales"
    },
    {
      img: 'https://concordmusichall.com/wp-content/uploads/2016/09/DSC_3711.jpg',
      title: 'Madrid',
      rows: 2,
      cols: 2,
      link: "/cards/Madrid"
    },
    {
      img: 'https://photos.leoweekly.com/wp-content/uploads/2022/05/006-006-120621-CB-KnockedLoose.jpg',
      title: 'Barcelona',
      cols: 2,
      link: "/cards/Barcelona"
    },
    {
      img: 'https://i.pinimg.com/originals/f3/19/f7/f319f70bfb2916edeaa1eb25f00da0dc.jpg',
      title: 'Bilbao',
      cols: 2,
      rows: 3,
      link: "/cards/Bilbao"
    },
    {
      img: 'https://favim.com/pd/s1/orig/3/black-and-white-concert-crowd-show-Favim.com-153502.jpg',
      title: 'Cerca de mi',
      cols: 2,
      rows: 1,
      link: "/map"
    },
    {
      img: 'https://images.squarespace-cdn.com/content/v1/5c479fe8b10598270faa81bb/1568633619106-X8KO3JV6INQ4QNA60X1O/NYE+on+the+Hill+Day+1-334.jpg',
      title: 'Pop',
      cols: 2,
      rows: 2,
      link: "/cards/Pop"
    },
    {
      img: 'https://img1.wsimg.com/isteam/ip/27b6da6d-d679-4632-a278-ad6ab20adcbc/exodus-musichallofwilliamsburg-08.jpg',
      title: 'Rock',
      cols: 2,
      rows: 3,
      link: "/cards/Rock"
    },
    {
      img: 'https://i.pinimg.com/originals/f6/d2/99/f6d2992c6a49b51171c57efd5d131b9f.jpg',
      title: 'Electronica',
      cols: 2,
      rows: 2,
      link: "/cards/Electronica"
    },
  ];

  return (
    <>
      <section className="links-container">
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
                  color: "#1BE1A2",
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











