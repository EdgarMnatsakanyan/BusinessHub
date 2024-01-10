import React from 'react';
import cl from './GetInTouch.module.css';
import { useState } from 'react';

const GetInTouch = () => {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
    const emailValidation = () => {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9*-]+\.[a-z]{2,8}(.[a-z(2,8)])?/g;
        if (regEx.test(email)) {
            setMessage('Email verified');
        } else if (!regEx.test(email)) {
            setMessage('Not verified')
        } else {
            setMessage('')
        }
    };



    const handleOnChange = (e) => {
        setEmail(e.target.value)
    }
    return (
        <div className={cl.GetInTouchContainer}>
            <div className={cl.GetInTouchSection}>
                <div className={cl.infoSection}>
                    <h1>Get In<br /> Touch</h1>
                    <div className={cl.getInInfor}>
                        <p className={cl.elit}>Elit plaza business center</p>
                        <p className={cl.phoneNumber}>+374 94 41 203 931</p>
                        <p className={cl.mailSection}>info@businesshuv.com</p>
                    </div>
                </div>
                <div className={cl.GetInTouchOutInput}>
                    <div className={cl.inputSection}>
                        <input onChange={handleOnChange} value={email} type="email" placeholder='| Your mail'/>
                        <input type="text" placeholder='| The challenge'/>
                    {message}
                    </div>
                    <button onClick={emailValidation}>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;