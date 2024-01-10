import React from 'react';
import SlideBar from '../slideBar/SlideBar.jsx';
import Carusel from '../carousel/CarouselSection.jsx';
import GetInTouch from '../getintouch/GetInTouch.jsx';
import cl from './DigitalIndividual.module.css';

const DigitalIndividual = () => {
    return (
        <div className={cl.allContent}>
            <div className={cl.backgroundIndividual}>
            <div className={cl.titleAndPictureContainer}>
                <div className={cl.titleContainer}>
                    <h1>
                        Digital Marketing <br />
                        services that <br />
                        solves problems
                    </h1>
                    <p>
                        Our innovative design and copywriting team will develop a <br />
                        comprehensive visual and verbal identity system to reflect your <br />
                        brand's strategic objectives, distinguish it from the crowd, and bring <br />
                        the belief-led brand to life.
                    </p>
                </div>
                <div>
                    <div className={cl.individualPicture}></div>
                </div>
            </div>
                <div className={cl.individualComment}>
                    <p>Indentity Design</p>
                    <p>Value Proposition</p>
                    <p>Conceptual Design</p>
                    <p>Naming</p>
                    <p>Stylyzed Font Design</p>
                    <p>Presentation design</p>
                    <p>Conceptual design</p>
                </div>

            <div className={cl.leftPicSection}>
                <div className={cl.leftPicture}></div>
                <div className={cl.titleSection}>
                    <h1>Brand identity</h1>
                    <p className={cl.dataPharagraph}>4-8 monthes production time</p>
                    <p className={cl.titleInfo}>
                        Our innovative design and copywriting team will develop a <br />
                        comprehensive visual and verbal identity system to reflect your <br />
                        brand's strategic objectives, distinguish it from the crowd, and <br />
                        bring the belief-led brand to life
                        <br /><br />
                        A Magnet, we believe that the sky is the limit! As a holistically- <br />
                        minded web agency, our primary focus is utilizing all of our
                    </p>
                    <div className={cl.leftIndContainer}>
                        <button>See The Process</button>
                        <button>Get In Touch</button>
                    </div>
                </div>
            </div>

            <div className={cl.rightPicSection}>
                <div className={cl.rightPictureOne}></div>
                <div className={cl.rightTitleSection}>
                    <h1>Branding</h1>
                    <p className={cl.rightDataPharagraph}>4-8 monthes production time</p>
                    <p className={cl.rightTitleInfo}>
                        Our innovative design and copywriting team will develop a <br />
                        comprehensive visual and verbal identity system to reflect your <br />
                        brand's strategic objectives, distinguish it from the crowd, and <br />
                        bring the belief-led brand to life
                        <br /><br />
                        A Magnet, we believe that the sky is the limit! As a holistically- <br />
                        minded web agency, our primary focus is utilizing all of our
                    </p>
                    <div className={cl.leftIndContainer}>
                        <button>See The Process</button>
                        <button>Get In Touch</button>
                    </div>
                </div>
            </div>

            <div className={cl.leftPicSection}>
                <div className={cl.leftPictureOne}></div>
                <div className={cl.titleSection}>
                    <h1>Naming</h1>
                    <p className={cl.dataPharagraph}>4-8 monthes production time</p>
                    <p className={cl.titleInfo}>
                        Our innovative design and copywriting team will develop a <br />
                        comprehensive visual and verbal identity system to reflect your <br />
                        brand's strategic objectives, distinguish it from the crowd, and <br />
                        bring the belief-led brand to life
                        <br /><br />
                        A Magnet, we believe that the sky is the limit! As a holistically- <br />
                        minded web agency, our primary focus is utilizing all of our
                    </p>
                    <div className={cl.leftIndContainer}>
                        <button>See The Process</button>
                        <button>Get In Touch</button>
                    </div>
                </div>
            </div>

            <div className={cl.rightPicSection}>
                <div className={cl.rightPictureTwo}></div>
                <div className={cl.rightTitleSection}>
                    <h1>Value <br /> proposition</h1>
                    <p className={cl.rightDataPharagraph}>4-8 monthes production time</p>
                    <p className={cl.rightTitleInfo}>
                        Our innovative design and copywriting team will develop a <br />
                        comprehensive visual and verbal identity system to reflect your <br />
                        brand's strategic objectives, distinguish it from the crowd, and <br />
                        bring the belief-led brand to life
                        <br /><br />
                        A Magnet, we believe that the sky is the limit! As a holistically- <br />
                        minded web agency, our primary focus is utilizing all of our
                    </p>
                    <div className={cl.leftIndContainer}>
                        <button>See The Process</button>
                        <button>Get In Touch</button>
                    </div>
                </div>
            </div>

            <SlideBar />
            </div>
            <Carusel />
            <GetInTouch />
        </div>
    );
};

export default DigitalIndividual;