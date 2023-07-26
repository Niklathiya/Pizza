import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Secondaryheader from '../Header/Secondaryheader'

const Secondarylayout = () => {
    return (
        <div>
            <Secondaryheader />
                <Outlet />
            <Footer />
        </div>
    )
}

export default Secondarylayout
