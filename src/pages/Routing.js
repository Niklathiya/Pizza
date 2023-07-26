import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Layout from './Layout/Layout'
import Ourmenus from './Ourmenus'
import Reservation from './Reservation'
import Secondarylayout from './Layout/Secondarylayout'
import Singleproduct from './Singleproduct'
import Products from './Products'
import Login from './Login'
import LikedProductsPage from './LikedProductsPage'
import Cart from './Cart'

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
                    <Route path='/' element={<Secondarylayout />} >
                        <Route path='/Singleproduct' element={<Singleproduct />} />
                        <Route path='/Products' element={<Products />} />
                        <Route path='/LikedProductsPage' element={<LikedProductsPage />} />
                        <Route path='/Cart' element={<Cart />} />
                    </Route>
                    <Route path='/Login' element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routing
