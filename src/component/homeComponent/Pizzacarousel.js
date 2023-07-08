import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';

const Pizzacarousel = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
            slidesToSlide: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 2,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div>
            <div className='carousel'>
                <Carousel
                    responsive={responsive} showDots={true} dotListClass="custom-dot-list-style"
                    removeArrowOnDeviceType={["superLargeDesktop", "desktop", "tablet", "mobile"]}
                    draggable={false} swipeable={true}
                >
                    <div className='carousel_space'>
                        <Link>
                            <img src='../images/genovese.jpg' />
                            <h3>genovese</h3>
                        </Link>
                        <div className='carousel_title'>
                            <p>Tomato sauce, mozzarella, sun dried tomatoes, feta cheese, baby</p>
                            <div className='alignment'>
                                <div className='alignment carousel_title_space'>
                                    <p>12"</p>
                                    <p>$10.0</p>
                                </div>
                                <div className='alignment carousel_title_space'>
                                    <p>18"</p>
                                    <p>$15.0</p>
                                </div>
                                <div className='alignment carousel_title_space'>
                                    <p>20"</p>
                                    <p>$20.0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='carousel_space'>
                        <Link>
                            <img src='../images/Paneer_Makhni.png' className="hi" />
                            <h3>Veggie Paradise</h3>
                        </Link>
                        <div className='carousel_title'>
                            <p>Cheese, Fresh Onion, Juicy Corn, Fresh Crisp Capsicum with Red Paprika.</p>
                            <div className='alignment'>
                                <div className='alignment carousel_title_space'>
                                    <p>12"</p>
                                    <p>$9.0</p>
                                </div>
                                <div className='alignment carousel_title_space'>
                                    <p>18"</p>
                                    <p>$14.0</p>
                                </div>
                                <div className='alignment carousel_title_space'>
                                    <p>20"</p>
                                    <p>$19.0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='carousel_space'>
                        <Link>
                            <img src='../images/pizza11.png' className="hi" />
                            <h3>Veggie Paradise</h3>
                        </Link>
                        <div className='carousel_title'>
                            <p>Tomato sauce, mozzarella, classic American style pepperoni.</p>
                            <div className='alignment'>
                                <div className='alignment carousel_title_space'>
                                    <p>12"</p>
                                    <p>$9.0</p>
                                </div>
                                <div className='alignment carousel_title_space'>
                                    <p>18"</p>
                                    <p>$14.0</p>
                                </div>
                                <div className='alignment carousel_title_space'>
                                    <p>20"</p>
                                    <p>$19.0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='carousel_space'>
                        <Link>
                            <img src='../images/pizza22.png' className="hi" />
                            <h3>Veggie Paradise</h3>
                        </Link>
                        <div className='carousel_title'>
                            <p>Tomato sauce, mozzarella, classic American style pepperoni.</p>
                            <div className='alignment'>
                                <div className='alignment carousel_title_space'>
                                    <p>12"</p>
                                    <p>$9.0</p>
                                </div>
                                <div className='alignment carousel_title_space'>
                                    <p>18"</p>
                                    <p>$14.0</p>
                                </div>
                                <div className='alignment carousel_title_space'>
                                    <p>20"</p>
                                    <p>$19.0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='carousel_space'>
                        <Link>
                            <img src='../images/pizza3.png' className="hi" />
                            <h3>Veggie Paradise</h3>
                        </Link>
                        <div className='carousel_title'>
                            <p>Tomato sauce, mozzarella, classic American style pepperoni.</p>
                            <div className='alignment'>
                                <div className='alignment carousel_title_space'>
                                    <p>12"</p>
                                    <p>$9.0</p>
                                </div>
                                <div className='alignment carousel_title_space'>
                                    <p>18"</p>
                                    <p>$14.0</p>
                                </div>
                                <div className='alignment carousel_title_space'>
                                    <p>20"</p>
                                    <p>$19.0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='carousel_space'>
                        <Link>
                            <img src='../images/pepperoni.jpg' />
                            <h3>pepperoni</h3>
                        </Link>
                        <div className='carousel_title'>
                            <p>Tomato sauce, mozzarella, classic American style pepperoni.</p>
                            <div className='alignment'>
                                <div className='alignment carousel_title_space'>
                                    <p>12"</p>
                                    <p>$9.0</p>
                                </div>
                                <div className='alignment carousel_title_space'>
                                    <p>18"</p>
                                    <p>$14.0</p>
                                </div>
                                <div className='alignment carousel_title_space'>
                                    <p>20"</p>
                                    <p>$19.0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='carousel_space'>
                        <Link>
                            <img src='../images/capricciosa.jpg' />
                            <h3>capricciosa</h3>
                        </Link>
                        <div className='carousel_title'>
                            <p>Tomato sauce, mozzarella, ham, artichoke hearts, cremini</p>
                            <div className='alignment'>
                                <div className='alignment carousel_title_space'>
                                    <p>12"</p>
                                    <p>$12.0</p>
                                </div>
                                <div className='alignment carousel_title_space'>
                                    <p>18"</p>
                                    <p>$21.0</p>
                                </div>
                                <div className='alignment carousel_title_space'>
                                    <p>20"</p>
                                    <p>$26.0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='carousel_space'>
                        <Link>
                            <img src='../images/parmigiana.jpg' />
                            <h3>parmigiana</h3>
                        </Link>
                        <div className='carousel_title'>
                            <p>Tomato sauce, mozzarella, fresh basil, grilled eggplant, Grana Padano</p>
                            <div className='alignment'>
                                <div className='alignment carousel_title_space'>
                                    <p>12"</p>
                                    <p>$9.0</p>
                                </div>
                                <div className='alignment carousel_title_space'>
                                    <p>18"</p>
                                    <p>$15.0</p>
                                </div>
                                <div className='alignment carousel_title_space'>
                                    <p>20"</p>
                                    <p>$20.0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default Pizzacarousel
