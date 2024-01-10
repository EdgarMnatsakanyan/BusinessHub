import React from 'react';
import cl from './DigitalMarketing.module.css';
import { useNavigate } from 'react-router-dom';

const DigitalMarktein = () => {
    const navigate = useNavigate()
    const digitalMarketingContinue = () => {
        navigate('/digitalMarketingIndividual')
        window.scrollTo({top:0})
    }

    return (
        <div className={cl.digitalMarketingContainer}>
            <div className={cl.digitalMarketingSection}>
                <div className={cl.digitalMarketingInCeontainer}>
                    <div className={cl.picture}></div>
                    <div className={cl.titleContainer}>
                        <h1>Digital<br /> Marketing</h1>
                        <p>
                        “First need” marketing activities<br/>
                        From brand strategy, naming, and logo design, to<br/>
                        guidelines, campaigns, and content, we build brands<br/>
                        that connect with your target audience.
                        </p>
                    </div>
                    <div className={cl.AboutMoreContainer}>
                        <div className={cl.aboutSection}>
                            <p>SMM</p>
                            <p>SEO</p>
                            <p>Google Analytics,<br />Google Consoel</p>
                            <p>E-Mail marketing</p>
                            <p>Amazon Advertising</p>
                        </div>
                        <div className={cl.lernMoreBtn} onClick={digitalMarketingContinue}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigitalMarktein;