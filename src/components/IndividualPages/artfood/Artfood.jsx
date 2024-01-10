import React from 'react';
import cl from './Artfood.module.css'
import Navigation from '../../UI/navigationTransparent/NavigationTransparent';
import SlideBar from '../../UI/slideBar/SlideBar';
import TrustedProcess from '../../UI/trustedProcess/TrustedProcess';
import GetInTouch from '../../UI/getintouch/GetInTouch';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const Artfood = () => {
    const settings = {
        infinity: true,
        speed: 4000,
        slidesToShow: 1,
        SlidesToScroll: 6,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true
    }

    return (
        <div className={cl.containerAllSections}>
            <Navigation />
           <div className={cl.hundredLogoImg}/>
           <div className={cl.hundredContainer}>
                <div className={cl.aboutPage}>
                    <h2 className={cl.dataPage}>June 2023</h2>
                    <div className={cl.AboutThisPage}>
                        <h1 className={cl.namePage}>Hundred CSJH</h1>
                        <div className={cl.TagsPage}>
                            <p>Web design</p>
                            <p>Identity design</p>
                            <p>Social media marketing</p>
                        </div>
                        <p className={cl.FAQPage}>
                            The year 2022 marked the arrival of a revolutionary new French <br />
                            automotive brand, Kate. Founded by Thibaud Elzière, Matthias <br />
                            Goldenberg and Pierre Escrieut, Kate has taken a decisive turn by <br /> 
                            offering light electric vehicles, entirely made in France, in response to <br /> 
                            today's challenges of sustainability and responsibility. Kate's first <br /> 
                            founding act was the acquisition of NOSMOKE, a French manufacturer <br /> 
                            of compact all-terrain vehicles, well known since the 60s, now <br /> 
                            transformed into the flagship electric model, the Original, since 2023.
                        </p>
                        <a href="https://hundredms.com/" className={cl.linkPage}>Website link</a>
                    </div>
                </div>
                {/*  */}
                <div className={cl.pictureContainer}>
                    <div className={cl.pictureOne}/>
                </div>
                <div className={cl.WhatADoThispage}>
                    <h1 className={cl.WhatADoTitle}>The problem and the solution</h1>
                    <div className={cl.ParagraphSection}>
                        <p>
                        The year 2022 marked the arrival of a revolutionary new French automotive brand, Kate. Founded by Thibaud Elzière, Matthias Goldenberg and Pierre Escrieut, Kate has taken a decisive turn by offering light electric vehicles, entirely made in France, in response to today's challenges of sustainability and responsibility. Kate's first founding act was the acquisition of NOSMOKE, a French manufacturer of compact all-terrain vehicles, well known since the 60s, now transformed into the flagship electric model, the Original, since 2023.
                        </p>
                        <p>
                        The year 2022 marked the arrival of a revolutionary new French automotive brand, Kate. Founded by Thibaud Elzière, Matthias Goldenberg and Pierre Escrieut, Kate has taken a decisive turn by offering light electric vehicles, entirely made in France, in response to today's challenges of sustainability and responsibility. Kate's first 
                        </p>
                    </div>
                </div>
                <div className={cl.pictureContainer}>
                    <div className={cl.pictureTwo}/>
                    <div className={cl.pictureThree}/>
                    <div className={cl.pictureFout}/>
                    <div className={cl.pictureFive}/>
                </div>

                <div className={cl.PhotoshootsTitleSection}>
                    <h1>SMM and Photoshoots</h1>
                    <p>
                        We meticulously engineered a content strategy tailored to Artfood's brand ethos, 
                        showcasing the company's rich heritage, the essence of their quality produce, and
                        the heartwarming stories behind each tomato.From prompt responsiveness to messages
                        to orchestrating multiple product photoshoots, our efforts aimed to elevate Artfood's
                        online persona and foster meaningful connections with its audience.
                    </p>
                </div>

                <div className={cl.CarouselContainer}>
                    <Slider style={{display: 'flex', flexDirection: "column"}} {...settings}>
                            <div className={cl.CarouselOne}/>
                            <div className={cl.CarouselTwo}/>
                            <div className={cl.CarouselThree}/>
                            <div className={cl.CarouselFour}/>
                            <div className={cl.CarouselFive}/>
                            <div className={cl.CarouselSix}/>
                            <div className={cl.CarouselSeven}/>
                            <div className={cl.CarouselEight}/>
                    </Slider>
                </div>

           </div>
           <div className={cl.lineBar}/>
            <SlideBar />
            <TrustedProcess />
            <GetInTouch />

        </div>
    );
};

export default Artfood;