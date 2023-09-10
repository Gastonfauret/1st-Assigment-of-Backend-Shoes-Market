import { useEffect, useState } from 'react';
import { getShoes } from '../api/getShoes';
import ShoesCards from '../components/ShoesCards';

function MapShoeCards() {
    const [shoes, setShoes] = useState([]);
    const [reload, setReload] = useState(0);
    const addReload = () => {
      setReload(reload + 1);
    }
  
    useEffect(() => {
      getShoes()
        .then((res) => {
          addReload();
          return res.json()
      })
        .then((data) => setShoes(data));
    }, []);
    return (
        <div className="cards-container">
            {shoes.map(shoe => <ShoesCards shoe={shoe} key={shoe.id} />)}
        </div>

    )
}

export default MapShoeCards