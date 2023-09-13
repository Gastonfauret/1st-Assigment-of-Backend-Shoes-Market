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
            to={"/"}
            style={({ isActive }) => {
              return { color: isActive ? "black" : null };
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
              return { color: isActive ? "black" : null };
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
              return { color: isActive ? "black" : null };
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
              return { color: isActive ? "black" : null };
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
