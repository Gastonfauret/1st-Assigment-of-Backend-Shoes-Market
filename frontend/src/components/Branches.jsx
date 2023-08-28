import Nike from '../assets/branches/Logo_NIKE.svg'
import Adidas from '../assets/branches/Adidas_isologo.svg'
import Converse from '../assets/branches/ConverseLogo.svg'
import Dc from '../assets/branches/dc-shoes.svg'
import Vans from '../assets/branches/Vans-logo.svg'

import '../styles/Branches.css'


function Branches() {
    return (
        <>
        <div className="branches-container">
            <img src={Nike} alt="Nike Logo"/>
            <img src={Adidas} alt="Adidas Logo"/>
            <img src={Converse} alt="Converse Logo"/>
            <img src={Dc} alt="Dc Logo"/>
            <img src={Vans} alt="Vans Logo"/>
        </div>

        </>
    )

}

export default Branches