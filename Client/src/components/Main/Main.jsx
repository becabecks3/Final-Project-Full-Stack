import { Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import Cards from "./Home/Cards/Cards";
import Map from './Home/Map/Map'

const Main = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cards/Madrid' element={<Cards />} />
        <Route path='/cards/Barcelona' element={<Cards />} />
        <Route path='/cards/Bilbao' element={<Cards />} />
        <Route path='/cards/Festivales' element={<Cards />} />
        <Route path='/map' element={<Map />} />
        {/* <Route path='/perfil' element={<Profile />} /> */}
      </Routes>
    </>
  )
};

export default Main;