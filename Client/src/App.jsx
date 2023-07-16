import React, { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import { BrowserRouter } from 'react-router-dom';
import {EventContext} from './context/eventContext';


function App() {

  const [eventList, setEventList] = useState([]);

 
  const eventData = {
    eventList,
    setEventList
  }




  return (
    <>
      <BrowserRouter>
      <EventContext.Provider value={eventData} >
        <Header />
        <Main />
      </EventContext.Provider>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
