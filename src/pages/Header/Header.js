import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    /* -------------------------------------------------------------------------- */
    /*                                Fixed header function                              */
    /* -------------------------------------------------------------------------- */
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsFixed(scrollPosition > 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    /* -------------------------------------------------------------------------- */
    /*                         Responsive header function                         */
    /* -------------------------------------------------------------------------- */

    const [clicked, setclicked] = useState(false)
    const onClickClose = () => {
        setclicked(!clicked);
    }

    return (
        <>
            <header className={`fixed-after-scroll-header ${isFixed ? 'fixed' : ','}`}>
                <nav className="main_nav">
                    <div>
                        <Link to="/">
                            <img src='images/logo.png' className='logo' />
                        </Link>
                    </div>
                    <div className='nav_box'>
                        <ul id='navbar' className={clicked ? "#navbar header_link" : "#navbar"}>
                            <li>
                                <Link to="/" className="header_link">HOME</Link>
                            </li>
                            <li>
                                <Link to="/Service" className="header_link">our menus</Link>
                            </li>
                            <li>
                                <Link to="/About" className="header_link">ABOUT US</Link>
                            </li>
                            <li>
                                <Link to="/Work" className="header_link">RESERVATION</Link>
                            </li>
                            <li className='btn_space'>
                                <div>
                                    <button className='button'>ORDER MEAL</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='hamburger_menu' onClick={onClickClose} >
                        <i id='bar' className={clicked ? "fas fa-times" : "fa-solid fa-bars-staggered fa-rotate-180"} ></i>
                        <div className={clicked ? "overlay" : ","}></div>
                    </div>
                </nav>

            </header>
        </>
    );
};
export default Header;




