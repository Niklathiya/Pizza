import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';

const Pastacarousel = () => {
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
            <div>
                <div className='carousel'>
                    <Carousel
                        responsive={responsive} showDots={true} dotListClass="custom-dot-list-style"
                        removeArrowOnDeviceType={["superLargeDesktop", "desktop", "tablet", "mobile"]}
                        draggable={false} swipeable={true}
                    >
                        <div className='carousel_space'>
                            <Link>
                                <img src="./images/carbonara.jpg" />
                                <h3>carbonara</h3>
                            </Link>
                            <div className='carousel_title'>
                                <p>A comforting classic combines the wonderful flavors or fresh cream,</p>
                            </div>
                        </div>
                        <div className='carousel_space'>
                            <Link>
                                <img src="./images/black_seafood_pasta.jpg" className='hi' />
                                <h3>bolognese</h3>
                            </Link>
                            <div className='carousel_title'>
                                <p>Homemade bolognese sauce served with your choice of pasta.</p>
                            </div>
                        </div>
                        <div className='carousel_space'>
                            <Link>
                                <img src='../images/spaghetti_marinara.jpg' className="hi" />
                                <h3>spaghetti marinara</h3>
                            </Link>
                            <div className='carousel_title'>
                                <p>Fresh prawns, calamari, NZ Green mussles, served in a homemade</p>
                            </div>
                        </div>
                        <div className='carousel_space'>
                            <Link>
                                <img src='../images/arrabiata.jpg' className="hi" />
                                <h3>arrabiata</h3>
                            </Link>
                            <div className='carousel_title'>
                                <p>Literally translated as "angry" pasta in Italian, we make our own sauce</p>
                            </div>
                        </div>
                        <div className='carousel_space'>
                            <Link>
                                <img src='../images/matriciana.jpg' className="hi" />
                                <h3>matriciana</h3>
                            </Link>
                            <div className='carousel_title'>
                                <p>Spicy, savoury and delicious we slow simmer tomato sauce with chilies,</p>
                            </div>
                        </div>
                        <div className='carousel_space'>
                            <Link>
                                <img src='../images/spaghetti_marinara.jpg' />
                                <h3>spaghetti marinara</h3>
                            </Link>
                            <div className='carousel_title'>
                                <p>Fresh prawns, calamari, NZ Green mussles, served in a homemade</p>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Pastacarousel
