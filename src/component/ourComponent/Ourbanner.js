import React from 'react'

const Ourbanner = () => {
    return (
        <div>
            <section className='banner'>
                <div className='our_bg_img'>
                    <div className='banner_overlay'>
                        <div className='ourbanner_heading'>
                            <div className='banner_title'>
                                <p>more flavor for less</p>
                            </div>
                            <div className='banner_text'>
                                <p>
                                    our seasonal
                                </p>
                                <p className='text_animation_flex'>
                                    <span className='text_animation t1'>m</span>
                                    <span className='text_animation t2'>e</span>
                                    <span className='text_animation t3'>n</span>
                                    <span className='text_animation t4'>u</span>
                                    <span className='text_animation t5'>s</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Ourbanner
