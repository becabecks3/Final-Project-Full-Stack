// Map.jsx
// Map.jsx
import React, { useContext, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { encode } from "ngeohash";
import { EventContext } from "../../../../context/eventContext";

const Map = () => {
  const { eventList } = useContext(EventContext);
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  useEffect(() => {
    const geolocateAndPrintMap = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            setPosition({ latitude, longitude });
          },
          (error) => {
            console.log("Error obtaining geolocation:", error);
          }
        );
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    };

    geolocateAndPrintMap();
  }, []);

  return (
    <>
      {position.latitude !== 0 && position.longitude !== 0 && (
        <MapContainer center={[position.latitude, position.longitude]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.jawg.io/jawg-matrix/{z}/{x}/{y}{r}.png?access-token={accessToken}"
            minZoom={0}
            maxZoom={22}
            subdomains="abcd"
            accessToken="bBSSN2ijAIV8SRhPOa1TiWG0tZVJDj5WP5gzhvq5fECKjQETnbRuUDsjTJmFwTt6"
          />
          {eventList && eventList.length && eventList.map((event) => (
            <Marker
              key={event.name}
              position={[event.venueLocation.latitude, event.venueLocation.longitude]}
              icon={L.icon({
                iconUrl: "./assets/pin.png",
                iconSize: [45, 50],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
              })}
            >
              <Popup>
                <section>
                  <h3>{event.name}</h3>
                  <p>Date: {event.dateTime}</p>
                  <p>Venue: {event.venueName}</p>
                  <p>Address: {event.venueAddress}</p>
                  <p>Prices From: {event.price}€</p>
                  <a href={event.tickets}>Buy Tickets</a>
                </section>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </>
  );
};

export default Map;





