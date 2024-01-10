import React from 'react';
import Branding from './UI/branding/Branding.jsx';
import Marketing from './UI/marketing/Marketing.jsx'
import DigitalMarketing from './UI/digitalMarketing/DigitalMarketing.jsx';
import WebDesign from './UI/webDesign/WebDesign.jsx';
import SlideBar from './UI/slideBar/SlideBar.jsx';
import TrustedProcess from './UI/trustedProcess/TrustedProcess.jsx';
import CarouselSection from './UI/carousel/CarouselSection.jsx';
import GetInTouch from './UI/getintouch/GetInTouch.jsx';


const Servers = () => {
    
    return (
        <div className='serversContainer'>
            <div className='serversInContainer'>
                <div className='serverTitleContainer'>
                    <h1 className='serverTitiel'>What me<br />offer</h1>
                    <p className='serverPharagraph'>
                        Business Hub Marketing Agency was founded in 2017. We provide <br /> 
                        Marketing services and customize them according to our clients' <br /> 
                        specific needs and goals. Our team is a group of passionate <br /> 
                        professionals. We have proficient experience in managing <br /> 
                        marketing campaigns and social media marketing of businesses <br /> 
                        operating in food industry, starting from agricultural products to 
                    </p>
                </div>
                <div className='serversFirstPictures'></div>
            </div>
            <>
                <Branding />
                <SlideBar />
                <div className='lineServicess'></div>
                <Marketing />
                <SlideBar />
                <div className='lineServicess'></div>
                <DigitalMarketing />
                <SlideBar />
                <div className='lineServicess'></div>
                <WebDesign />
                <SlideBar />
                <div className='lineServicess'></div>
                <TrustedProcess />
                <CarouselSection />
                <GetInTouch />
            </>
        </div>
    );
};

export default Servers;