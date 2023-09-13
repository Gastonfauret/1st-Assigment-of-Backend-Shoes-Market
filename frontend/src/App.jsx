import Branches from "./components/Branches";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";

import { Routes, Route } from "react-router-dom";

import MapShoeCards from './components/MapShoeCards';
import MapClothesCards from './components/MapClothesCards';
import MapUsersCards from './components/MapUsersCards';
import ButtonsCards from './components/ButtonsCards';
import BannerHome from './components/BannerHome';
import Logo from './components/Logo'

import "./styles/App.css";
import { ProviderContext } from "./components/ProviderContext";

function App() {
  return (
    <>
      <ProviderContext>
        <Logo/>
        <Carousel />
        <Branches />
        <ButtonsCards />

        <Routes>
          <Route exact path="/" element={<BannerHome />} />
          <Route exact path="/shoes" element={<MapShoeCards />} />
          <Route exact path="/clothes" element={<MapClothesCards />} />
          <Route exact path="/users" element={<MapUsersCards />} />
        </Routes>
        <Footer />
      </ProviderContext>
    </>
  );
}

export default App;
