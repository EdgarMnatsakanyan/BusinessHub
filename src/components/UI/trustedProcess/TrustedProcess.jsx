import React from 'react';
import cl from './TrustedProcess.module.css';

const TrustedProcess = () => {
    return (
        <div className={cl.trustedProcessContianer}>
            <div className={cl.trustedProcessAllSection}>
                <div className={cl.titleContainer}>
                    <h1>
                        Trusted process<br/> designed to deliver<br/> great results</h1>
                    <div className={cl.picture}></div>
                </div>
                <div className={cl.pictureContainer}>
                    <div className={cl.ThisPicture}></div>
                </div>
            </div>
        </div>
    );
};

export default TrustedProcess;