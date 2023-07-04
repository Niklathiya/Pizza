import React from 'react'
import Banner from '../component/homeComponent/Banner'
import Culture from '../component/homeComponent/Culture'
import Delicious from '../component/homeComponent/Delicious'
import Dishes from '../component/homeComponent/Dishes'
import Ourmenus from '../component/homeComponent/Ourmenus'
import Perspective from '../component/homeComponent/Perspective'
import Serving from '../component/homeComponent/Serving'

const Home = () => {

    return (
        <div>
            <Banner />
            <Culture />
            <Perspective />
            <Ourmenus />
            <Serving />
            <Dishes />
            <Delicious />
        </div>
    )
}

export default Home
