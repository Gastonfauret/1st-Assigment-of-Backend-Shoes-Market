import '../styles/ShoesCards.css'
import React from 'react'


function ShoesCards({ shoe }) {

    return (
        <div className="cards-container">
            <div className="shoes-cards-container" id={shoe.id}>
                <img className='shoe-photo' src={shoe.imagen} alt="Shoe Image" />

                <div className="shoe-text-container">
                    <p className='brand'>{shoe.marca}</p>
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