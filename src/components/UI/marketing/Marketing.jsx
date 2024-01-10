import React from 'react';
import cl from './Marketing.module.css';
import { useNavigate } from 'react-router-dom';

const Marketing = () => {
    const navigate = useNavigate()
    
    const marketingContinue = () => {
        navigate('/marketingIndividual')
        window.scrollTo({top:0})
    }

    return (
        <div className={cl.marketingContainer}>
            <div className={cl.marketingSection}>
                <div className={cl.marketingInCeontainer}>
                    <div className={cl.picture}></div>
                    <div className={cl.titleContainer}>
                        <h1>Marketing</h1>
                        <p>
                        “First need” marketing activities<br/>
                        From brand strategy, naming, and logo design, to<br/>
                        guidelines, campaigns, and content, we build brands<br/>
                        that connect with your target audience.
                        </p>
                    </div>
                    <div className={cl.AboutMoreContainer}>
                        <div className={cl.aboutSection}>
                            <p>Strategy development</p>
                            <p>Market research</p>
                            <p>Business consultancy</p>
                            <p>Business analytics</p>
                            <p>Event marketing</p>
                        </div>
                        <div className={cl.lernMoreBtn} onClick={marketingContinue}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Marketing;