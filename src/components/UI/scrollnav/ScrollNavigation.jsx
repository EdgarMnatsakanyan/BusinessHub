import React, { useState } from 'react';
import { FaEquals } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import cl from './ScrollNavigation.module.css';
import { useNavigate } from 'react-router-dom';


const ScrollNavigation = () => {
    const [isIconClicked, setIsIconClicked] = useState(false);
        const [buttonColor, setButtonColor] = useState(<FaEquals />);

        const handleClick = () => {
            setIsIconClicked(!isIconClicked);
            setButtonColor(isIconClicked ? <RxCross2/> : <FaEquals />);
        };

    const navigate = useNavigate()
    const serversContinue = () => {
        navigate('/servers')
        window.scrollTo({top:0})
    }
    const processContinue = () => {
        navigate('/process')
        window.scrollTo({top:0})
    }
    const ProjectContinue = () => {
        navigate('/projects')
        window.scrollTo({top:0})
    }
    return (
        <div className={cl.scrollNavBar} onClick={handleClick} >
            <div className={cl.burger}>    
                {isIconClicked ? <RxCross2 className={cl.icon}/> : <FaEquals className={cl.icon}/>}
            </div>
            {isIconClicked &&
                <div className={cl.dropleftNavBar}>
                    <ul className={cl.menuDrop}>
                        <li onClick={serversContinue}>Services</li>
                        <li onClick={processContinue}>Process</li>
                        <li onClick={ProjectContinue}>Projects</li>
                    </ul>
                </div>
            }
        </div>
    );
};

export default ScrollNavigation;