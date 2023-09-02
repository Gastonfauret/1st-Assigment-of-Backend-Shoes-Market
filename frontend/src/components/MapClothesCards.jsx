import { useEffect, useState } from 'react';
import { getClothes } from '../api/getClothes';
import ClothesCards from '../components/ClothesCards';

function MapClothesCards() {
    const [clothes, setClothes] = useState([]);

    useEffect(() => {
        getClothes()
            .then(res => res.json())
            .then(data => setClothes(data))
    }, [])

    return (
        <div className="cards-container">
            {clothes.map(clothe => <ClothesCards clothe={clothe} key={clothe.id} />)}
        </div>

    )
}

export default MapClothesCards;