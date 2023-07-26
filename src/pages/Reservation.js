import React from 'react'
import Reservationbanner from '../component/reservationComponent/Reservationbanner'
import Reservationform from '../component/reservationComponent/Reservationform'
import Takeout from '../component/reservationComponent/Takeout'

const Reservation = () => {
    return (
        <div>
            <Reservationbanner />
            <Reservationform />
            <Takeout />
        </div>
    )
}

export default Reservation
