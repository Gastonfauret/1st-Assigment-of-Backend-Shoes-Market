import '../styles/ClothesCards.css'
import React from 'react'


function ClothesCards({ clothe }) {

    return (
        <div className="clothes-cards-container" id={clothe.id}>
            <img className='clothe-photo' src={clothe.imagen} alt="clothe Image" />

            <p className='brand'>{clothe.marca}</p>


            <div className="clothe-text-container">
                <div className="brand-text-container">
                    <p className='model'>{clothe.modelo}</p>
                    <p className='size'>{clothe.talle}</p>
                </div>

                <div className="clothe-price-container">
                    <p className='price'>{clothe.precio}</p>
                </div>
            </div>
        </div>
    )
}

export default ClothesCards