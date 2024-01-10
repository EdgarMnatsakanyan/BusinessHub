import React from 'react';
import Branding from './UI/branding/Branding';
import Marketing from './UI/marketing/Marketing';
import DigitalMarktein from './UI/digitalMarketing/DigitalMarketing';
import WebDesign from './UI/webDesign/WebDesign';
import TrustedProcess from './UI/trustedProcess/TrustedProcess';
import CarouselSection from './UI/carousel/CarouselSection';
import GetInTouch from './UI/getintouch/GetInTouch';
import { useNavigate } from 'react-router-dom';

const FirstPage = () => {
    const navigate = useNavigate()
    const projectsContiniue = () => {
        navigate('/projects')
    }

    return (
        <div className='HeaderAllSection'>
            <div className='header__container'>
                <div className='header__titileContianer'>
                    <h1 className='header__titile'>Quality Flexibility Trust</h1>
                </div>
                <div className='icon_Microphone'></div>
                <div className='icon_Pencile'></div>
                <div className='icon_DropIcon'></div>
                <div className='header__paragraphContainer'>
                    <p className='header__paragraph'>
                        We’re different because we get it – a good 
                        partner needs to understand business in
                        order to make it effective.
                    </p>
                </div>
            </div>
            <div className='businessHub_logo'></div>
            <div className='Hwo__container'>
                <h2>Who are we</h2>
                <p>
                    Business Hub Marketing Agency was founded in 2017. We provide Marketing<br/> 
                    services and customize them according to our clients' specific needs and goals. Our<br /> 
                    team is a group of passionate professionals. We have proficient experience in<br /> 
                    managing marketing campaigns and social media marketing of businesses<br /> 
                    operating in food industry, starting from agricultural products to hospitality.</p>
            </div>
            <div className='pageInfoSection'>
                <h1>Recent Projects</h1>
                <a href='#'>
                    <div className='pageInfoImg'></div>
                </a>
            </div>

            
            <div className='containerBrand'>
            <div className='sectionEvery'>
                <div className='photoHundred'></div>
                <div className='titleContainer'>
                    <h1>Hunder</h1>
                    <p>2022</p>
                </div>
                <div className='commentsContainer'>
                    <p>Web design</p>
                    <p>Identity design</p>
                    <p>Social media marketing</p>
                </div>
            </div>
            <div className='sectionEvery'>
                <div className='photoArtfood'></div>
                <div className='titleContainer'>
                    <h1>Artfood</h1>
                    <p>From 2018</p>
                </div>
                <div className='commentsContainer'>
                    <p>Social media marketing</p>
                    <p>Photograpy</p>
                </div>
            </div>
            <div className='sectionEvery'>
                <div className='photoHlf'></div>
                <div className='titleContainer'>
                    <h1>HLF</h1>
                    <p>2022</p>
                </div>
                <div className='commentsContainer'>
                    <p>Web design</p>
                    <p>Identity design</p>
                    <p>Social media marketing</p>
                </div>
            </div>
            <div className='sectionEvery'>
                <div className='photoArter'></div>
                <div className='titleContainer'>
                    <h1>Arter</h1>
                    <p>2022</p>
                </div>
                <div className='commentsContainer'>
                    <p>Social media marketing</p>
                    <p>Photograpy</p>
                    <p>Web design</p>
                    <p>Identity design</p>
                </div>
            </div>
            <div className='seeMoreContainer'>
                <a href="" className='seeAllPage' onClick={projectsContiniue}>See more</a>
            </div>
            </div>
            
                <Branding />
                <div className='lineBranding'><hr /></div>
                <Marketing />
                <div className='lineBranding'><hr /></div>
                <DigitalMarktein />
                <div className='lineBranding'><hr /></div>
                <WebDesign />
                <TrustedProcess />
                <CarouselSection />
            
            <GetInTouch/>
        </div>
    );
};

export default FirstPage;