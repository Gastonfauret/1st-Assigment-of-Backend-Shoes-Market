import { useEffect, useState } from "react";
import { getClothes } from "../api/getClothes";
import ClothesCards from "../components/ClothesCards";

function MapClothesCards() {
  const [clothes, setClothes] = useState([]);
  const [reload, setReload] = useState(0);

  const addReload = () => {
    setReload(() => reload + 1);
  }

  useEffect(() => {
    getClothes()
      .then((res) => {
        addReload();
        return res.json();
      })
      .then((data) => setClothes(data));
  }, [reload]); 

  return (
    <div className="cards-container">
      {clothes.map((clothe) => (
        <ClothesCards clothe={clothe} key={clothe.id} />
      ))}
    </div>
  );
}

export default MapClothesCards;
