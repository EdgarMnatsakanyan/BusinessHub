import React, { useState } from 'react';
import Input from 'react-phone-number-input/input'


const WorkWithUs = () =>  {
    const [value, setValue] = useState("");
    const [checkedBox, setCheckBox] = React.useState("");
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
        <div className='getInTouchContainer'>
            <div className='inTouchContainer'>
                <div className="inTouchTitileSection">
                    <div className='inTouchTitleContainer'>
                        <div>
                            <h1 className='getInTouchTitle'>
                                Got ideas? <br />
                                Let’s team up
                            </h1>
                            <p className='getInTouchParagraph'>Tell us about what you want to create</p>
                        </div>
                    </div>
                    <div className='aboutSection'>
                            <p className='elit'>Elit plaza business center</p>
                            <p className='phoneNumber'>+374 94 41 203 931</p>
                            <p className='mailSection'>info@businesshuv.com</p>
                    </div>
                </div>
                <div className='aboutYouContainer'>
                    <h1 className='inputTitle'>Tell us about you</h1>
                    <div className='aboutInputContainer'>
                        <input
                        className='aboutInput' 
                        placeholder='| Your name'
                        />
                        <input type="text" className='aboutInput' placeholder='| Company’s name'/>
                        <Input 
                        className='aboutInput'
                        value={value}
                        onChange={setValue}
                        maxLength={14}
                        placeholder='| Phone No'
                        />
                        <input
                        onChange={handleOnChange} 
                        value={email}
                        type="email" 
                        className='aboutInput' 
                        placeholder='| Email'
                        />
                    <p style={{color: "red", fontFamily: "Montserat"}}>{message}</p>
                    </div>
                    <div className='checkboxSection'>
                        <h1>What's your budget</h1>
                        <p>*Choose one option</p>
                    </div>
                    <div className='checkboxContainer'>
                    <div className='brandInput'>
                        <input type="checkbox" 
                            checked={checkedBox === "1000$"}
                            onChange={() => setCheckBox("1000$")}
                        />
                        <label htmlFor="">1000$</label>
                    </div>
                    <div className='brandInput'>
                        <input type="checkbox" 
                            checked={checkedBox === "from"}
                            onChange={() => setCheckBox("from")}/>
                        <label htmlFor="">From 1001$ to 9000$</label>
                    </div>
                    <div className='brandInput'>
                        <input type="checkbox" 
                            checked={checkedBox === "9001$"}
                            onChange={() => setCheckBox("9001$")}/>
                        <label htmlFor="">9001$</label>
                    </div>
                    </div>
                    <div className='checkboxBrandTitleSection'>
                        <h1>What are you looking for?</h1>
                        <p>*You can choose many options</p>
                    </div>
                    <div className='checkboxBrandContainer'>
                        <div className='brandInput'>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Branding</label>
                        </div>
                        <div className='brandInput'>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Marketing</label>
                        </div>
                        <div className='brandInput'>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Digital marketing</label>
                        </div>
                        <div className='brandInput'>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Web development</label>
                        </div>
                    </div>
                    <p className='tellParagraph'>Tell us some details</p>
                    <textarea className='textareaWorkWith' name="" id="" cols="1" rows="5" placeholder='| I’m exsited...'></textarea>
                    <button className='withWorkBtn' onClick={emailValidation}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default WorkWithUs;