import '../styles/Footer.css'
import { BsInstagram } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

function Footer() {
    return (
        <div className="footer-container">

            <div className="elements-container">
                <div className="description-container">
                    <div className="text-container">
                        <h3>ABOUT US</h3>
                        <p>News</p>
                        <p>Branches</p>
                        <p>Contact Us</p>
                    </div>

                    <div className="text-container">
                        <h3>HELP</h3>
                        <p>Shipping and Delivery</p>
                        <p>Changes</p>
                    </div>

                    <div className="text-container">
                        <h3>ADDRESS</h3>
                        <p>270 Liberty St., Benito Juarez, BA, 7020</p>
                    </div>

                    <div className="text-container">
                        <h3>PHONE NUMBER</h3>
                        <p>+54 9 2281 12 123456</p>
                    </div>
                </div>

                <div className="social">
                    <BsInstagram className='instagram' />
                    <FiFacebook className='facebook' />
                    <FaTwitter className='twitter' />
                    <FaTiktok className='tiktok' />
                </div>
            </div>

            <div className="copy-design-container">
                <div className="copyright-text-container">
                    <p>Benito Juarez, Buenos Aires, Argentine ⭐⭐⭐</p>
                </div>

                <div className="design-text-container">
                    <p className='gula-designers'>Design by Gula Developers Team</p>
                </div>


            </div>


        </div>

    )
}

export default Footer;