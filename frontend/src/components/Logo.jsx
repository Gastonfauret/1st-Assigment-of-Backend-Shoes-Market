import LogoVanity from '../assets/Vanity-Logo.png'
import '../styles/Logo.css'

import TextSlider from '../components/TextSlider'


function Logo() {
    const messages = [
        'Be prepare to be the best in your sports o just to conquer the city with Vanity Style. Suscribe to the newsletter to be the first to know tha lastest sales and news.'       
    ];


    return (
        <div className="logo-container">
            <img src={LogoVanity} alt="Vanity Logo" />
            <TextSlider texts={messages} />
        </div>
    )
}

export default Logo;
