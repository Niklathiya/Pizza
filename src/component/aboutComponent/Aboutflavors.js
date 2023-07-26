import React, { useRef, useEffect, useState } from 'react';

const Aboutflavors = () => {
    const imageRef = useRef(null);
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
        const imageHeight = image.clientHeight;
        const windowHeight = window.innerHeight;
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollPercentage = (scrollPosition / (scrollHeight - windowHeight)) * 60;
        const moveDistance = (scrollPercentage / 10) * (windowHeight - imageHeight);

        image.style.transform = `translateY(${moveDistance}px)`;
    }, [scrollPosition]);


    /* -------------------------------------------------------------------------- */
    /*                                   scroll                                   */
    /* -------------------------------------------------------------------------- */

    return (
        <div>
            <section className='aboutflavor_box'>
                <div className='aboutflavor'>
                    <div className='flavor_imgbox'>
                        <img ref={imageRef} src='../images/flavor_bite.png' className='flavor_img' />
                    </div>
                    <div className='flavor_text'>
                        <p>THE FLAVORS OF LIFE ARE JUST A BITE AWAY</p>
                        <p>With every bite, pizza tells a story,
                            A tale of craftsmanship and culinary glory.
                            From kneading dough to choosing toppings divine,
                            Pizza's legacy continues to shine.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Aboutflavors
