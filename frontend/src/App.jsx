import { useEffect, useState } from 'react';

import { getShoes } from './api/getShoes';

import Branches from './components/Branches'
import ShoesCards from './components/ShoesCards';
import Footer from './components/Footer';

import Carousel from './components/Carousel';


import './styles/App.css'

function App() {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    getShoes()
      .then(res => res.json())
      .then(data => setShoes(data))
  }, [])

  //console.log(shoes[0].marca)

  return (
    <>
      <Carousel />      
      <Branches />

      <div className="cards-container">
        {shoes.map(shoe => <ShoesCards shoe={shoe} key={shoe.id} />)}
      </div>

    <Footer/>

    </>
  )
}

export default App
