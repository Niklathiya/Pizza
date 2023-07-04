import React from 'react'

const Banner = () => {
    return (
        <div>
            <section className='banner'>
                <div className='bg_img'>
                    <div className='banner_overlay'>
                        <div className='banner_heading'>
                            <div className='banner_title'>
                                <p>more flavor for less</p>
                            </div>
                            <div className='banner_text'>
                                <p>
                                    taste for
                                </p>
                                <p className='text_animation_flex'>
                                    <span className='text_animation t1'>E</span>
                                    <span className='text_animation t2'>V</span>
                                    <span className='text_animation t3'>E</span>
                                    <span className='text_animation t4'>R</span>
                                    <span className='text_animation t5'>Y</span>
                                    <span className='text_animation t6'>O</span>
                                    <span className='text_animation t7'>N</span>
                                    <span className='text_animation t8'>E</span>
                                </p>
                            </div>
                            <div className='banner_description'>
                                <p>
                                    Pizza, a slice of happiness baked with care, Toppings galore, it's a flavor affair. Whether enjoyed in solitude or shared with friends,
                                    Pizza, a culinary treasure that never ends
                                </p>
                            </div>
                            <div>
                                <button className='button banner_btn'>
                                    view our menus
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Banner
