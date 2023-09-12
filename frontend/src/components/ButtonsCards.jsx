import { Link, NavLink } from "react-router-dom";
import "../styles/ButtonsCards.css";
import {
  useSwitchToUsers,
  useSwitchToClothes,
  useSwitchToShoes,
} from "./ProviderContext";

function ButtonsCards() {
  const switchToUsers = useSwitchToUsers();
  const switchToClothes = useSwitchToClothes();
  const switchToShoes = useSwitchToShoes();

  return (
    <div className="buttons-container">
      <ul>
        <li>
          <NavLink
            to={"/home"}
            style={({ isActive }) => {
              return { color: isActive ? "black" : null, fontWeight: isActive ? "600" : null };
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/shoes"}
            onClick={switchToShoes}
            style={({ isActive }) => {
              return { color: isActive ? "black" : null, fontWeight: isActive ? "600" : null };
            }}
          >
            Shoes
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/clothes"}
            onClick={switchToClothes}
            style={({ isActive }) => {
              return { color: isActive ? "black" : null, fontWeight: isActive ? "600" : null};
            }}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/users"}
            onClick={switchToUsers}
            style={({ isActive }) => {
              return { color: isActive ? "black" : null, fontWeight: isActive ? "600" : null};
            }}
          >
            Users
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default ButtonsCards;
