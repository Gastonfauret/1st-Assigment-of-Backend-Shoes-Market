import '../styles/BannerKipchoge.css'
import Nike from '../assets/branches/Logo_NIKE.svg'

function BannerKipchoge() {
    return (
        <>
            <div className="banner-kipchoge-container">
                <img src="https://i.postimg.cc/J0XBzv7H/eliud-kipchoge-vienna-marathon-record-tom-jamieson-1-removebg-preview.png" alt="Kipchoge Photo" />

                <div className="text-container">
                    <h1>Eliud Kipchoge</h1>
                    <img src={Nike} alt="Nike Logo"/>
                </div>
            </div>


        </>

    )
}

export default BannerKipchoge;