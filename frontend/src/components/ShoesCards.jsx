import '../styles/ShoesCards.css'
import React from 'react'


function ShoesCards({ shoe }) {

    return (
        <div className="shoes-cards-container" id={shoe.id}>
            <img className='shoe-photo' src={shoe.imagen} alt="Shoe Image" />

            <p className='brand'>{shoe.marca}</p>


            <div className="shoe-text-container">
                <div className="brand-text-container">
                    <p className='model'>{shoe.modelo}</p>
                    <p className='size'>{shoe.talle}</p>
                </div>

                <div className="shoe-price-container">
                    <p className='price'>{shoe.precio}</p>
                </div>
            </div>
        </div>
    )
}

export default ShoesCards