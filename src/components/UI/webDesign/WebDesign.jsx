import React from 'react';
import cl from './WebDesign.module.css';
import { useNavigate } from 'react-router-dom';

const WebDesign = () => {
    const navigate = useNavigate();
    const WebContinue = () => {
        navigate('/webDesignIndividual')
        window.scrollTo({top:0})
    }

    return (
        <div className={cl.WebDesignContainer}>
            <div className={cl.WebDesignSection}>
                <div className={cl.WebDesignInCeontainer}>
                    <div className={cl.picture}></div>
                    <div className={cl.titleContainer}>
                        <h1>Web Design</h1>
                        <p>
                        “First need” marketing activities<br/>
                        From brand strategy, naming, and logo design, to<br/>
                        guidelines, campaigns, and content, we build brands<br/>
                        that connect with your target audience.
                        </p>
                    </div>
                    <div className={cl.AboutMoreContainer}>
                        <div className={cl.aboutSection}>
                            <p>Web Design</p>
                            <p>Sitempa Design</p>
                            <p>Full development</p>
                            <p>Site maintenance</p>
                        </div>
                        <div className={cl.lernMoreBtn} onClick={WebContinue}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebDesign;