import React from 'react'
import Banner from '../component/homeComponent/Banner'
import Culture from '../component/homeComponent/Culture'
import Delicious from '../component/homeComponent/Delicious'
import Dishes from '../component/homeComponent/Dishes'
import Menus from '../component/homeComponent/Menus'
import Perspective from '../component/homeComponent/Perspective'
import Serving from '../component/homeComponent/Serving'

const Home = () => {

    return (
        <div>
            <Banner />
            <Culture />
            <Perspective />
            <Menus />
            <Serving />
            <Dishes />
            <Delicious />
        </div>
    )
}

export default Home
