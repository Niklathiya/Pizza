import React, { useRef, useEffect, useState } from 'react';

const Delicious = () => {
    /* -------------------------------------------------------------------------- */
    /*                              reveal on scroll                              */
    /* -------------------------------------------------------------------------- */
    // useEffect(() => {
    //     const reveal = () => {
    //         const reveals = document.querySelectorAll('.reveal');
    //         for (let i = 0; i < reveals.length; i++) {
    //             const windowHeight = window.innerHeight;
    //             const revealTop = reveals[i].getBoundingClientRect().top;
    //             const revealPoint = 150;

    //             if (revealTop < windowHeight - revealPoint) {
    //                 reveals[i].classList.add('active');
    //             } else {
    //                 reveals[i].classList.remove('active');
    //             }
    //         }
    //     };

    //     window.addEventListener('scroll', reveal);
    //     return () => {
    //         window.removeEventListener('scroll', reveal);
    //     };
    // }, []);


    /* -------------------------------------------------------------------------- */
    /*                                  Animation                                 */
    /* -------------------------------------------------------------------------- */

    const imageRef = useRef(null);
    const image2Ref = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const image = imageRef.current;
        const image2 = image2Ref.current;
        const imageHeight = image.clientHeight;
        const windowHeight = window.innerHeight;
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollPercentage = (scrollPosition / (scrollHeight - windowHeight)) * 30;
        const moveDistance = (scrollPercentage / 80) * (windowHeight - imageHeight);

        image.style.transform = `translateY(${moveDistance}px)`;
        image2.style.transform = `translateY(${moveDistance}px)`;
    }, [scrollPosition]);

    return (
        <div>
            <section>
                <div className='pizza_decor'>
                    <img ref={imageRef} src="./images/pizza_deco1.png" className="decoration_image" />
                    <img ref={image2Ref} src="./images/pizza_deco2.png" className="decoration_image2" />
                </div>
                <div className='delicious_text'>
                    <p className='delicious_animation'>
                        <span className='delicious_text_animation d_text1'>d</span>
                        <span className='delicious_text_animation d_text2'>e</span>
                        <span className='delicious_text_animation d_text3'>l</span>
                        <span className='delicious_text_animation d_text4'>i</span>
                        <span className='delicious_text_animation d_text5'>c</span>
                        <span className='delicious_text_animation d_text6'>i</span>
                        <span className='delicious_text_animation d_text7'>o</span>
                        <span className='delicious_text_animation d_text8'>u</span>
                        <span className='delicious_text_animation d_text9'>s</span>
                    </p>
                    <p>FOOD WITH</p>
                    <p>MEANING</p>
                </div>
                <div className='delicious_img'>
                    <div className='delicious_animation'>
                        <img src='../images/delicious.png' className='delicious_bg' />
                        <div className='delicious_arrow'>
                            <img src='../images/arrow.png' />
                            <p>Savor the flavors</p>
                        </div>
                    </div>
                    <button className='order_btn order_yellow_btn'>
                        <p>order</p>
                        <p>now</p>
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Delicious
