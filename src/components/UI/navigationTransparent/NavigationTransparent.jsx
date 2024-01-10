import React, { useState } from 'react';
import cl from './NavigationTransparent.module.css';
import { useNavigate } from 'react-router-dom';
const Navigation = () => {
    const navigate = useNavigate()
    const handleContinue = (event) => {
        navigate('/')
        setActive(event.target.id);
        window.scrollTo({top:0})
    }
    const serversContinue = (event) => {
        navigate('/servers')
        setActive(event.target.id);
        window.scrollTo({top:0})
    }
    const processContinue = (event) => {
        navigate('/process')
        setActive(event.target.id);
        window.scrollTo({top:0})
    }
    const ProjectContinue = (event) => {
        navigate('/projects')
        setActive(event.target.id);
        window.scrollTo({top:0})
    }
    
    const workWithUsContinue = (event) => {
        navigate('/workWithUs')
        setActive(event.target.id);
        window.scrollTo({top:0})
    }
    const [active, setActive] = useState("");
    const NavChecked = [cl.nav_menuList];
    const Active = [cl.active];
    const PageName = [cl.page_name];

    return (
        <div className={cl.business_navigation}>
            <div 
            key={1}
            className={active === "1" ? PageName : PageName}
            id={"1"}
            onClick={handleContinue}></div>
            
                <div className={cl.menu_nav}>
                    <li 
                    key={2}
                    className={active === "2" ? Active : NavChecked}
                    id={"2"}
                    onClick={serversContinue}
                    >Servers</li>
                    <li 
                    key={3}
                    className={active === "3" ? Active : NavChecked}
                    id={"3"} onClick={processContinue}>Process</li>
                    <li  
                    key={4}
                    className={active === "4" ? Active : NavChecked}
                    id={"4"}  onClick={ProjectContinue}>Projects</li>
                </div>
            <button className={cl.btn_navigation} onClick={workWithUsContinue}>Work with us</button>
        </div>
    );
};

export default Navigation;