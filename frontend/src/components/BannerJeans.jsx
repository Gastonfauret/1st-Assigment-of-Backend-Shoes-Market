import '../styles/BannerJeans.css';

function BannerJeans() {
    return (
        <div className="banner-jeans-container">
            <div className="stack-jeans-container">
                <img className='woman-denim' src="https://i.postimg.cc/RZ6g0SMW/woman-in-denim-removebg-preview.png" />
            </div>
            <div className="text-brand-container">
                <div className="text-container">
                    <p>DREAM IN DENIM</p>
                    <p>MAKE YOUR WORLD</p>
                    <p>MORE LIGHTBLUE</p>
                </div>
            </div>
            <div className="logo-container">
                <img className='jeans-logo' src="https://i.postimg.cc/4dWtNTzk/Logo-removebg-preview-1.png" alt="Brand Logo" />
            </div>
        </div >
    )
}

export default BannerJeans;

