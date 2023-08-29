import { useEffect, useState } from 'react';

import { getShoes } from './api/getShoes';

import Header from './components/Header'
import Branches from './components/Branches'
import ShoesCards from './components/ShoesCards';

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
      <Header />
      <Branches />

      {Array.from(shoes).map(shoe => <ShoesCards shoe={shoe} key={shoe.id} />)}
    </>
  )
}

export default App
