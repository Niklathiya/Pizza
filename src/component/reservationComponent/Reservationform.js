import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Reservationform = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div>
            <section className='Reservationform'>
                <div className='contact_detail'>
                    <div className='contact_title'>
                        <p>our address</p>
                        <h6>Lake house, 13 hanway square, london, uk</h6>
                    </div>
                    <div className='contact_title'>
                        <p>reserve by phone</p>
                        <h6><img src='../images/store.png' /> restaurant : +45 453 3432</h6>
                        <h6><i className="fa-solid fa-mobile-screen-button"></i>cellphone : +45 453 3445</h6>
                    </div>
                    <div className='social_links'>
                        <div className='social_button reserve_button'>
                            <i className="fa-brands fa-facebook-f"></i>
                        </div>
                        <div className='social_button reserve_button'>
                            <i className="fa-brands fa-instagram"></i>
                        </div>
                        <div className='social_button reserve_button'>
                            <i className="fa-brands fa-whatsapp"></i>
                        </div>
                        <div className='social_button reserve_button'>
                            <i className="fa-brands fa-linkedin"></i>
                        </div>
                    </div>
                </div>
                <div className='contact_form'>
                    <form>
                        <div className='reserve_form'>
                            <div className='reserve_form_box'>
                                <p><label>your name</label></p>
                                <input type="text" />
                            </div>
                            <div className='reserve_form_box'>
                                <p><label>your email</label></p>
                                <input type="email" />
                            </div>
                            <div className='reserve_form_box'>
                                <p><label>your number</label></p>
                                <input type="tel" />
                            </div>
                            <div className='reserve_form_box'>
                                <p><label>type of event</label></p>
                                <select name="event">
                                    <option value="---">---</option>
                                    <option value="open house">open house</option>
                                    <option value="business event">business event</option>
                                    <option value="wedding">wedding</option>
                                    <option value="other">other</option>
                                </select>
                            </div>
                            <div className='reserve_form_box'>
                                <p><label>number of guests</label></p>
                                <select name="guests">
                                    <option value="---">---</option>
                                    <option value="open house">0-25</option>
                                    <option value="business event">26-50</option>
                                    <option value="wedding">51+</option>
                                </select>
                            </div>
                            <div className='reserve_form_box'>
                                <p><label>date of event</label></p>
                                <DatePicker selected={selectedDate} onChange={handleDateChange}
                                    dateFormat="dd/MM/yyyy" placeholderText="dd-mm-yyyy" />
                            </div>
                            <div className='form_button'>
                                <button >submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section >
        </div >
    )
}

export default Reservationform
