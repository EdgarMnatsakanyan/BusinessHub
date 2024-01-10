import React from 'react';
import cl from './Footer.module.css'
const Footer = () => {
    return (
        <div className={cl.footerContainer}>
            <div className={cl.footerBtnSection}>
                <a href="">Linkedin</a>
                <a href="">Instagram</a>
                <a href="">Facebook</a>
            </div>
            <div className={cl.footerInfo}>
                <p>Powered by business hub  |  Copyright Business hub 2023</p>
            </div>
        </div>
    );
};

export default Footer;