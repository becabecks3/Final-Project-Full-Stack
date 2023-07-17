import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { EventContext } from "../../../../context/eventContext";


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
        address: event._embedded.venues[0].address.line1 ,
        // price: event.priceRanges[1].min,
        tickets: event.url,
        url: event.images[1].url,
        genre: event.classifications[0].genre.name,
      }));
      console.log(eventData)
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
    }

    fetchDataFromAPI(params);
  };

  return (
    <>
      <Link to="/cards/Festivales" onClick={() => handleFetchData("Festivales")}>
        Festivales
      </Link>
      <Link to="/cards/Madrid" onClick={() => handleFetchData("Madrid")}>
        Madrid
      </Link>
      <Link to="/cards/Barcelona" onClick={() => handleFetchData("Barcelona")}>
        Barcelona
      </Link>
      <Link to="/cards/Bilbao" onClick={() => handleFetchData("Bilbao")}>
        Bilbao
      </Link>
      <Link to="/map" onClick={() => handleFetchData("Cerca de mi")}>
        Cerca de mi
      </Link>
    </>
  );
};

export default Links;










