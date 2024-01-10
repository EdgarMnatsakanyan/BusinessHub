import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cl from './CarouselSection.module.css';





const CarouselSection = () => {

    const settings = {
        infinity: true,
        speed: 2000,
        slidesToShow: 4,
        SlidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000
    }
    const settingsTwo = {
        infinity: true,
        speed: 2000,
        slidesToShow: 4,
        SlidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000
    }

    return (
        <div className={cl.carouselContaienr}>
            <div className={cl.carouselTitleSection}>
                <h1>Deatured clients and our results</h1>
            </div>
            <div className={cl.CarouselBarContaienr}>
                <Slider style={{display: 'flex', flexDirection: "column"}} {...settings}>
                        <div className={cl.luxioBor}></div>
                        <div className={cl.luxioLight}></div>
                        <div className={cl.luxioManikyur}></div>
                        <div className={cl.luxioWm}></div>
                        <div className={cl.luxioGrich}></div>
                </Slider>
                <br />
                <br />
                <Slider style={{display: 'flex', flexDirection: "column"}} {...settingsTwo}>
                        <div className={cl.luxioBor}></div>
                        <div className={cl.luxioLight}></div>
                        <div className={cl.luxioManikyur}></div>
                        <div className={cl.luxioWm}></div>
                        <div className={cl.luxioGrich}></div>
                </Slider>
            </div>
        </div>
    );
};

export default CarouselSection;