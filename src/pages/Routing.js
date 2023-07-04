import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Service from './Service'
import Work from './Work'
import Contact from './Contact'
import Layout from './Layout/Layout'

const Routing = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />} >
                        <Route path="/" element={<Home />} />
                        <Route path='/About' element={<About />} />
                        <Route path='/Service' element={<Service />} />
                        <Route path='/Work' element={<Work />} />
                        <Route path='/Contact' element={<Contact />} />
                    </Route>
                </Routes>
            </BrowserRouter>            
        </>
    )
}

export default Routing
