import { Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import Details from './Details/Details'

const Main = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/popular' element={<Details />} />
        <Route path='/cerca' element={<Details />} />
        <Route path='/rock' element={<Details />} />
        <Route path='/hip-hop' element={<Details />} />
        <Route path='/pop' element={<Details />} />
        {/* <Route path='/perfil' element={<Profile />} /> */}
      </Routes>
    </>
  )
};

export default Main;