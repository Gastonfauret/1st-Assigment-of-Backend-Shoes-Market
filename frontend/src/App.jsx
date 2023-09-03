import Branches from './components/Branches'
import Footer from './components/Footer';
import Carousel from './components/Carousel';

import MapShoeCards from './components/MapShoeCards';
import MapClothesCards from './components/MapClothesCards';
import MapUsersCards from './components/MapUsersCards';

import './styles/App.css'

function App() {
  

  //console.log(shoes[0].marca)

  return (
    <>
      <Carousel />      
      <Branches />
      {/* <MapShoeCards /> */}
      <MapClothesCards />
       {/* <MapUsersCards /> */}
      <Footer/>

    </>
  )
}

export default App
