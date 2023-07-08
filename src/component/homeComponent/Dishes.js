import React from 'react'
import Dishmenu from './Dishmenu'

const Dishes = () => {
    return (
        <div>
            <section className='ourmenus'>
                <div className='dishes_title'>
                    <p>OUR POPULAR MENUS</p>
                </div>
                <h2>SIDE DISHES</h2>
                <div className='pizzamenu_box_space'>
                    <Dishmenu />
                </div>
            </section>
        </div>
    )
}

export default Dishes
