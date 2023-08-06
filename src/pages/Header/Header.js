import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    /* -------------------------------------------------------------------------- */
    /*                                Fixed header function                       */
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

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    /* -------------------------------------------------------------------------- */
    /*                         Responsive header function                         */
    /* -------------------------------------------------------------------------- */

    const [clicked, setclicked] = useState(false)
    const onClickClose = () => {
        setclicked(!clicked);
    }

    return (
        <>
            <div className='header_container'>
                <header className={`fixed-after-scroll-header ${isFixed ? 'fixed' : ','}`} id="hi">
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
                                    <Link to="/Menus" className="header_link">our menus</Link>
                                </li>
                                <li>
                                    <Link to="/About" className="header_link">ABOUT US</Link>
                                </li>
                                <li>
                                    <Link to="/Reservation" className="header_link">RESERVATION</Link>
                                </li>

                                {/* -------------------------------------------------------------------------
                                                              PROFILE BUTTON                               
                                -------------------------------------------------------------------------- */}
                                <li className='btn_space'>
                                    <div className='profile_flex dropdown' onClick={toggleDropdown}>
                                        <div className='profile_box'>
                                            <img src='images/profile_default.png' className='profile' />
                                        </div>
                                        <div className='profilename_flex'>
                                            <p>admin</p>
                                            <i className="fa-solid fa-angle-down"></i>
                                        </div>
                                        {isDropdownOpen && (
                                            <ul className="dropdown_menu">
                                                <li>
                                                    <Link to="/" className="dropdown_link">profile</Link>
                                                </li>
                                                <li>
                                                    <Link to="/LikedProductsPage" className="dropdown_link">favorites</Link>
                                                </li>
                                                <li>
                                                    <Link to="/Cart" className="dropdown_link">cart</Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="dropdown_link">review</Link>
                                                </li><li>
                                                    <Link to="/" className="dropdown_link">log out</Link>
                                                </li>
                                            </ul>
                                        )}
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
            </div>
        </>
    );
};
export default Header;




