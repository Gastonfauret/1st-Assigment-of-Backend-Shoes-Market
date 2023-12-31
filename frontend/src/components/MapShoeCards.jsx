import { useEffect, useState } from 'react';
import { getShoes } from '../api/getShoes';
import ShoesCards from '../components/ShoesCards';
import Modal from './Modal';

function MapShoeCards() {
    const [shoes, setShoes] = useState([]);
  
    useEffect(() => {
      getShoes()
        .then((res) => {
          return res.json()
      })
        .then((data) => setShoes(data));
    }, []);
    return (
      <>
      <Modal />
        <div className="cards-container">
            {shoes.map(shoe => <ShoesCards shoe={shoe} key={shoe.id} />)}
        </div>
      </>
    )
}

export default MapShoeCards