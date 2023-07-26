import React, { useEffect } from 'react'

const Culture = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollround = document.querySelector('.scrollround');
            const textleft = document.querySelector('.textscroll_left');
            const textright = document.querySelector('.textscroll_right');
            const value = window.scrollY;

            if (scrollround || textleft || textright) {
                scrollround.style.clipPath = `circle(${value}px at center center)`;
                textleft.style.left = `${30 - value / 12}%`;
                textright.style.right = `${70 - value / 12}%`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div>
            <section>
                <div className='culture'>
                    <div className='culture_box1'>
                        <img src='../images/culture.png' className='culture_img' />
                        <div className='culture_arrow'>
                            <p>Simply Delicious</p>
                            <img src='../images/arrow.png' />
                        </div>
                        <button className='order_btn order_black_btn'>
                            <p>order</p>
                            <p>now</p>
                        </button>
                    </div>
                    <div className='culture_box2'>
                        <p><span>We are a small boutique catering company</span> specializing in creating unique and personalized experiences to handle any of your event needs.</p>
                        <p>TASTE THE MEDITERRANEAN CULTURE</p>
                        <p>A slice of heaven, a symphony of taste,
                            Where tomato sauce and cheese interlace.
                            Toppings aplenty, from veggies to meat,
                            Pizza perfection, a sensation you can't beat.
                        </p>
                        <p>Mike Dean</p>
                    </div>
                    {/* -------------------------------------------------------------------------- */}
                    {/*                                 Text scroll                                */}
                    {/* -------------------------------------------------------------------------- */}
                    <div className='scrolllevel'>
                        <div>
                            <h2 className="textscroll_left">the taste you'll remember</h2>
                            <section className='scrollround'></section>
                            <div className="scroll_base"></div>
                        </div>
                        <div>
                            <h2 className="textscroll_right">a smile in every slice of bite</h2>
                            <section className='scrollround'></section>
                            <div className="scroll_base"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Culture
