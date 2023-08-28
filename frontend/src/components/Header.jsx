import '../styles/Header.css'
import NikeReact from '../assets/Nike-React.png'

function Header() {

    return (
        <>
            <div className="header-container">               
                <h1>EPIC REACT</h1>
                <img src={NikeReact} alt="Nike React" />

            </div>
        </>
    )
}

export default Header