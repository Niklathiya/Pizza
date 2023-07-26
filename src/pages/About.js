import React from 'react'
import Aboutbanner from '../component/aboutComponent/Aboutbanner'
import Aboutflavors from '../component/aboutComponent/Aboutflavors'
import Aboutfresh from '../component/aboutComponent/Aboutfresh'
import Aboutserve from '../component/aboutComponent/Aboutserve'
import Chef1 from '../component/aboutComponent/Chef1'
import Chef2 from '../component/aboutComponent/Chef2'
import Knowus from '../component/aboutComponent/Knowus'
import Oneroof from '../component/aboutComponent/Oneroof'

const About = () => {
    return (
        <div>
            <Aboutbanner />
            <Oneroof />
            <Aboutserve />
            <Aboutfresh />
            <Aboutflavors />
            <Knowus />
            <Chef1 />
            <Chef2 />
        </div>
    )
}

export default About
