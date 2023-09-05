import '../styles/BannerHome.css'
import Nike from '../assets/branches/Logo_NIKE.svg'
import Adidas from '../assets/branches/Adidas_isologo.svg'
import Vans from '../assets/branches/Vans-logo.svg'

import BannerKipchoge from '../components/BannerKipchoge';

function BannerHome() {
    return (
        <>
            <div className="home-container">
                <div className="banner-home nike">
                    <h1>Follow the Leader</h1>
                    <img src={Nike} alt="Nike Logo" />
                </div>

                <div className="banner-home adidas">
                    <h1>Reach out to the sky</h1>
                    <img src={Adidas} alt="Adidas Logo" />
                </div>

                <div className="banner-home vans">
                    <h1>Be your best version</h1>
                    <img src={Vans} alt="Vans Logo" />
                </div>
            </div>
            <BannerKipchoge />
        </>
    )
}

export default BannerHome;