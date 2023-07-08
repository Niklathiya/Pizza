import React from 'react'
import Pizzacarousel from '../homeComponent/Pizzacarousel'

const Ourpizzas = () => {
    return (
        <div>
            <section className='ourmenus'>
                <div className='menus_title'>
                    <p>
                        WAKE UP YOUR TASTE BUDS
                    </p>
                </div>
                <h2>OUR PIZZAS</h2>
                <Pizzacarousel />
            </section>
        </div>
    )
}

export default Ourpizzas
