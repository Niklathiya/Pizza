import React from 'react'
import CountUp from 'react-countup';

const Knowus = () => {
    return (
        <div>
            <div className='perspective'>
                <div className='Perspective_box2'>
                    <div className='knowus_img'>
                    </div>
                </div>
                <div className='Perspective_box1'>
                    <div className='perspective_bgimg'>
                        <div className='perspective_text'>
                            <div className='banner_title'>
                                <p>we know our food</p>
                            </div>
                            <p>meet our world class chiefs</p>
                            <p>
                                A big green salad is one of my go-to meals all year round. In the summer, the lettuces I find at the farmers market are so soft & sweet that a big green summer salad is really a treat.
                            </p>
                            <div className='counter_section'>
                                <CountUp start={0} end={60} delay={0} duration={3}>
                                    {({ countUpRef }) => (
                                        <div className="counter">
                                            <span ref={countUpRef} />
                                            <span style={{ color: 'white' }}>+</span>
                                            <h6 className='counter_title'>International Awards</h6>
                                        </div>
                                    )}
                                </CountUp>
                                <CountUp start={0} end={345} delay={0} duration={3}>
                                    {({ countUpRef }) => (
                                        <div className="counter">
                                            <span ref={countUpRef} />
                                            <span style={{ color: 'white' }}>+</span>
                                            <p>Pizza Menus</p>
                                        </div>
                                    )}
                                </CountUp>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Knowus
