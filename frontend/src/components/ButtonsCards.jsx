import { Link } from "react-router-dom";
import '../styles/ButtonsCards.css';

function ButtonsCards() {
    return (
        <div className="buttons-container">
            <ul>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/shoes'>Shoes</Link></li>
                <li><Link to='/clothes'>Clothes</Link></li>
                <li><Link to='/users'>Users</Link></li>
            </ul>
        </div>

    )
}

export default ButtonsCards;