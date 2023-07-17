import { Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import Cards from "./Home/Cards/Cards";
import Map from './Home/Map/Map'
import Favorites from "./Home/Favorites/Favorites";

const Main = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cards/Madrid' element={<Cards />} />
        <Route path='/cards/Barcelona' element={<Cards />} />
        <Route path='/cards/Bilbao' element={<Cards />} />
        <Route path='/cards/Festivales' element={<Cards />} />
        <Route path='/cards/Rock' element={<Cards />} />
        <Route path='/cards/Electronica' element={<Cards />} />
        <Route path='/cards/Pop' element={<Cards />} />
        <Route path='/map' element={<Map />} />
        <Route path='/perfil' element={<Favorites />} /> 
      </Routes>
    </>
  )
};

export default Main;