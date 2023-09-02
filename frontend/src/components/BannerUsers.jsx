import '../styles/BannerUsers.css'

function BannerUsers() {
    return(
        <div className='users-banner-container'>
            <div className='text-container'>
                <p>Meet our subscribers and join them.</p>                
                <p>Be the first to receive the best discounts.</p>
                <p>Link in the Tab "Users".</p>
            </div>
            <div className="users-profile-container">
                <img src="https://i.postimg.cc/J47zT8Vd/man-random-1.jpg" alt="Random Man One" />
                <div className="middle-users-container">
                    <img src="https://i.postimg.cc/RCL0QF8H/woman-random-1.jpg" alt="Random Woman One" />
                    <img src="https://i.postimg.cc/vHPHkKG8/man-random-2.jpg" alt="Random Man Two" />
                </div>
                <img src="https://i.postimg.cc/8c4P1KWH/woman-random-2.jpg" alt="Random Woman Two" />
            </div>
        </div>


        
    )
}

export default BannerUsers;