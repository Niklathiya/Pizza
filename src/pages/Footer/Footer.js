import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import {
    addDoc,
    collection,
    getDocs,
} from "firebase/firestore";
import { fireStoreDb } from '../../firebaseConfig';

const Footer = () => {
    const [data, setData] = useState([]);
    const [newItem, setNewItem] = useState("");

    const fetchData = async () => {
        const querySnapshot = await getDocs(collection(fireStoreDb, "users"));
        console.log(querySnapshot.docs);

        const data = [];
        querySnapshot.forEach((doc) => {
            if (doc.data().first) {
                data.push({ id: doc.id, text: doc.data().first });
            }
        });
        setData(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleCreate = async () => {
        await addDoc(collection(fireStoreDb, "users"), {
            name: "Ash",
            email: newItem,
            born: 1996,
        });
        fetchData();
        setNewItem("");
    };
    return (
        <div>
            <section>
                <div className='footer_bg'>
                    <div className='footer_overlay'>
                        <div className='footer_space'>
                            <div className='footer'>
                                <div>
                                    <h4>opening hours</h4>
                                    <p>Moday-Friday: 11am - 9pm</p>
                                    <p>Saturday-Sunday: 11am - 10pm</p>
                                    <p>Happy Hours: Everyday 2pm - 6pm</p>
                                </div>
                                <div className='footer_logobox'>
                                    <div className='footer_logo_align'>
                                        <img src='../images/logo.png' className='footer_logo' />
                                    </div>
                                    <p>Lake House, 13 Hanway, Square,</p>
                                    <p>London, UK</p>
                                </div>
                                <div>
                                    <h4>contact with us</h4>
                                    <div className='home_contact'>
                                        <input type="email" value={newItem}
                                            onChange={(e) => setNewItem(e.target.value)} />
                                        <button onClick={() => { handleCreate(); }}>
                                            <img src='../images/send.png' />
                                        </button>
                                    </div>
                                    <div className='social_links'>
                                        <div className='social_button'>
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </div>
                                        <div className='social_button'>
                                            <i className="fa-brands fa-instagram"></i>
                                        </div>
                                        <div className='social_button'>
                                            <i className="fa-brands fa-whatsapp"></i>
                                        </div>
                                        <div className='social_button'>
                                            <i className="fa-brands fa-linkedin"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='footer_nav'>
                            <div className='nav_box'>
                                <ul id='navbar'>
                                    <li>
                                        <Link to="/" className="header_link footer_link">HOME</Link>
                                    </li>
                                    <li>
                                        <Link to="/Menus" className="header_link footer_link">our menus</Link>
                                    </li>
                                    <li>
                                        <Link to="/About" className="header_link footer_link">ABOUT US</Link>
                                    </li>
                                    <li>
                                        <Link to="/Reservation" className="header_link footer_link">RESERVATION</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p className='copyright'>Copyright © 2023 Stardust Pizza</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
