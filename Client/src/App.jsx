import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import React from "react";
import { BrowserRouter } from 'react-router-dom';
import TicketMaster from './components/Main/TicketMaster/TicketMaster'

function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
      <Main />
      <Footer />
      <TicketMaster />
    </BrowserRouter>
    </>
  )
}

export default App
