import React from 'react';
import cl from './Branding.module.css'
import { useNavigate } from 'react-router-dom';
const Branding = () => {
    const navigate = useNavigate()
    const brandingIndividual = () => {
        navigate('/brandingIndividual')
        window.scrollTo({top:0})
    }
    return (
        <div className={cl.brandingContainer}>
            <div className={cl.brandingSection}>
                <h1 className={cl.brandingTitle}>Find a service that works for you</h1>
                <div className={cl.brandingInCeontainer}>
                    <div className={cl.picture}></div>
                    <div className={cl.titleContainer}>
                        <h1>Branding</h1>
                        <p>
                            Brand Communication and Brand Promotion Tools<br/>
                            From brand strategy, naming, and logo design, to<br/> 
                            guidelines, campaigns, and content, we build brands<br/> 
                            that connect with your target audience.
                        </p>
                    </div>
                    <div className={cl.AboutMoreContainer}>
                        <div className={cl.aboutSection}>
                            <p>Identity Design</p>
                            <p>Value Proposition</p>
                            <p>Conceptual Design</p>
                        </div>
                        <div className={cl.lernMoreBtn} onClick={brandingIndividual}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Branding;