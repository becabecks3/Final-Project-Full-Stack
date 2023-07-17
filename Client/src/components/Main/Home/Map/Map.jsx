import React, { useContext, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { encode } from "ngeohash";
import { EventContext } from "../../../../context/eventContext";
import { v4 as uuidv4 } from "uuid";
import "./Map.css";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const { eventList, setEventList } = useContext(EventContext);
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [selectedEvent, setSelectedEvent] = useState(null);
  let geoPoint;

  useEffect(() => {
    const geolocateAndPrintMap = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            geoPoint = encode(latitude, longitude, 9);
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

  useEffect(() => {
    if (geoPoint && eventList && eventList.length) {
      const maxDistance = 10;

      const filteredEvents = eventList.filter((event) => {
        const latDiff = Math.abs(event.venueLocation.latitude - position.latitude);
        const lngDiff = Math.abs(event.venueLocation.longitude - position.longitude);
        const distance = Math.sqrt(latDiff * latDiff + lngDiff * lngDiff);

        return distance <= maxDistance;
      });

      setEventList(filteredEvents);
    }
  }, [geoPoint, eventList, position]);

  

    const handleMarkerClick = () => {
      setSelectedEvent(eventList);
    };
    
   
  return (
    <body>
      <main>
        <section>
          <section className="map">
            {position.latitude !== 0 && position.longitude !== 0 && (
              <MapContainer center={[position.latitude, position.longitude]} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                  attribution='&copy; <a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.jawg.io/jawg-matrix/{z}/{x}/{y}{r}.png?access-token={accessToken}"
                  minZoom={0}
                  maxZoom={22}
                  subdomains="abcd"
                  accessToken="bBSSN2ijAIV8SRhPOa1TiWG0tZVJDj5WP5gzhvq5fECKjQETnbRuUDsjTJmFwTt6"
                />
                {eventList &&
                  eventList.length &&
                  eventList.map((event) => (
                    <Marker
                      key={uuidv4()}
                      position={[event.venueLocation.latitude, event.venueLocation.longitude]}
                      icon={L.icon({
                        iconUrl: "../src/assets/pin.png",
                        iconSize: [45, 50],
                        iconAnchor: [12, 41],
                        popupAnchor: [1, -34],
                      })}
                      onClick={() => handleMarkerClick()}
                    >
                      <Popup>
                        <section>
                          <h3>{event.name}</h3>
                          <p>Venue: {event.venueName}</p>
                          <p>Location: {event.venueName}</p>
                          <p>Time: {event.dateTime}</p>
                        </section>
                      </Popup>
                    </Marker>
                  ))}
              </MapContainer>
            )}
          </section>
          <section> 
            {selectedEvent && (
              <div className="selected-event">
                <h3>{selectedEvent.name}</h3>
                <p>Date: {selectedEvent.dateTime}</p>
                <p>Venue: {selectedEvent.venueName}</p>
                <p>Address: {selectedEvent.address}</p>
                <p>Prices From: {selectedEvent.price}€</p>
                <a href={selectedEvent.tickets}>Buy Tickets</a>
              </div>
            )}
          </section>
        </section>
      </main>
    </body>
  );
   
};

export default Map;










