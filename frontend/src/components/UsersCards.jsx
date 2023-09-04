import '../styles/UsersCards.css'
import React from 'react'


function UsersCards({ user }) {

    return (
        <div className="users-cards-container" id={user.id}>
            <img className='user-photo' src={user.image} alt="User Image" />

            <p className='name-lastname'>{user.name} {user.lastname}</p>
            <p className='age'>Age: {user.age}</p>
           
        </div>
    )
}

export default UsersCards;