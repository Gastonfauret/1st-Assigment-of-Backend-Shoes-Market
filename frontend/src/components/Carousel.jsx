import BannerJeans from './BannerJeans';
import Header from './Header';
import BannerUsers from './BannerUsers';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            <div>
                <Header />
            </div>
            <div>
                <BannerJeans />
            </div>
            <div>
                <BannerUsers />
            </div>            
        </Slider>
    );
};

export default Carousel;
