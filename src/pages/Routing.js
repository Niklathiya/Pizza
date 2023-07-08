import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Layout from './Layout/Layout'
import Ourmenus from './Ourmenus'
import Reservation from './Reservation'

const Routing = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />} >
                        <Route path="/" element={<Home />} />
                        <Route path='/Menus' element={<Ourmenus />} />
                        <Route path='/About' element={<About />} />
                        <Route path='/Reservation' element={<Reservation />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routing
