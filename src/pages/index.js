import { useState } from 'react'
import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/sidebar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'
import Services from '../components/Services'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
            <Navbar toggle={toggle}></Navbar>
            <HeroSection />
            <InfoSection { ...homeObjOne } />
            <InfoSection { ...homeObjTwo } />
            <Services />
            <InfoSection { ...homeObjThree } />
        </>
    )
}

export default Home
