import Branches from './components/Branches'
import Footer from './components/Footer';
import Carousel from './components/Carousel';

import { Routes, Route } from 'react-router-dom'

import MapShoeCards from './components/MapShoeCards';
import MapClothesCards from './components/MapClothesCards';
import MapUsersCards from './components/MapUsersCards';
import ButtonsCards from './components/ButtonsCards';
import BannerHome from './components/BannerHome';


import './styles/App.css'

function App() {

  return (
    <>
      <Carousel />
      <Branches />
      <ButtonsCards />

      <Routes>
        <Route exact path='/home' element={<BannerHome />} />
        <Route exact path='/shoes' element={<MapShoeCards />} />
        <Route exact path='/clothes' element={<MapClothesCards />} />
        <Route exact path='/users' element={<MapUsersCards />} />
      </Routes>     

      <Footer />

    </>
  )
}

export default App
