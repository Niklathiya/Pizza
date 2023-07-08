import React from 'react'
import Delicious from '../component/homeComponent/Delicious'
import Healthy from '../component/ourComponent/Healthy'
import Ourbanner from '../component/ourComponent/Ourbanner'
import Ourpizzamenu from '../component/ourComponent/Ourpizzamenu'
import Ourpizzas from '../component/ourComponent/Ourpizzas'

const Ourmenus = () => {
    return (
        <div>
            <Ourbanner />
            <Ourpizzas />
            <Healthy />
            <Ourpizzamenu />
            <Delicious />
        </div>
    )
}

export default Ourmenus
